import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Producto } from '../../core/models/producto.model';
import { Categoria } from '../../core/models/categoria.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private productosService = inject(ProductosService);
  private categoriasService = inject(CategoriasService);

  // Últimos 3 productos para "Nuevas llegadas"
  nuevasLlegadas: Producto[] = [];

  // Categorías para "Colecciones destacadas"
  categorias: Categoria[] = [];

  // Email del newsletter
  newsletterEmail = '';
  newsletterEnviado = false;

  loading = true;

  // Imágenes demo para colecciones
  coleccionesDemo = [
    {
      nombre: 'Coleccion de Verano',
      imagen:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
    },
    {
      nombre: 'Coleccion de Invierno',
      imagen:
        'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80',
    },
    {
      nombre: 'Accesorios',
      imagen:
        'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80',
    },
  ];

  // Imagen fallback por nombre de categoría
  getImagenCategoria(nombre: string): string {
    const lower = nombre.toLowerCase();
    if (lower.includes('camiset') || lower.includes('hombre')) {
      return 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80';
    }
    if (lower.includes('pantalon') || lower.includes('mujer')) {
      return 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80';
    }
    if (lower.includes('accesorio') || lower.includes('calzado')) {
      return 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80';
    }
    // Imagen genérica de moda
    return 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80';
  }

  ngOnInit() {
    this.cargarNuevasLlegadas();
    this.cargarCategorias();
  }

  cargarNuevasLlegadas() {
    this.productosService.getAll({ limite: 3, pagina: 1 }).subscribe({
      next: (res) => {
        this.nuevasLlegadas = res.datos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  cargarCategorias() {
    this.categoriasService.getAll().subscribe({
      next: (cats) => {
        // Máximo 3 categorías para las colecciones destacadas
        this.categorias = cats.slice(0, 3);
      },
    });
  }

  suscribirNewsletter() {
    if (this.newsletterEmail) {
      // Por ahora solo simulamos el envío
      // en el futuro se puede conectar a un servicio de email
      this.newsletterEnviado = true;
      this.newsletterEmail = '';
    }
  }

  // Formatea el precio con € y 2 decimales
  formatPrecio(precio: number): string {
    return `${Number(precio).toFixed(2)}€`;
  }
}
