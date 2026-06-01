import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../core/services/productos.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Producto } from '../../core/models/producto.model';
import { Categoria } from '../../core/models/categoria.model';

// Interfaz extendida para mostrar imagen del primer producto
interface ColeccionDestacada {
  id: number;
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private productosService = inject(ProductosService);
  private categoriasService = inject(CategoriasService);

  nuevasLlegadas: Producto[] = [];
  colecciones: ColeccionDestacada[] = [];

  newsletterEmail = '';
  newsletterEnviado = false;
  loading = true;

  ngOnInit() {
    this.cargarNuevasLlegadas();
    this.cargarColecciones();
  }

  cargarNuevasLlegadas() {
    this.productosService.getAll({ limite: 3, pagina: 1 }).subscribe({
      next: (res) => {
        this.nuevasLlegadas = res.datos;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  cargarColecciones() {
    // 1. Cargamos las categorías
    this.categoriasService.getAll().subscribe({
      next: (categorias) => {
        const cats = categorias.slice(0, 3);

        // 2. Por cada categoría buscamos su primer producto con imagen
        cats.forEach(cat => {
          // Si la categoría ya tiene imagen propia la usamos
          if (cat.imagenCategoria) {
            this.colecciones.push({
              id: cat.id,
              nombre: cat.nombre,
              imagen: cat.imagenCategoria
            });
          } else {
            // Si no, buscamos el primer producto de esa categoría con imagen
            this.productosService.getAll({
              categoriaId: cat.id,
              limite: 10,
              pagina: 1
            }).subscribe({
              next: (res) => {
                // Buscamos el primer producto que tenga imagen
                const productoConImagen = res.datos.find(p => p.imagenUrl);
                this.colecciones.push({
                  id: cat.id,
                  nombre: cat.nombre,
                  imagen: productoConImagen?.imagenUrl ||
                    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'
                });
              }
            });
          }
        });
      }
    });
  }

  suscribirNewsletter() {
    if (this.newsletterEmail) {
      this.newsletterEnviado = true;
      this.newsletterEmail = '';
    }
  }

  formatPrecio(precio: number): string {
    return `${Number(precio).toFixed(2)}€`;
  }
}