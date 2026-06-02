import { Component, inject, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CarritoService } from '../../core/services/carrito.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categoria } from '../../core/models/categoria.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  authService = inject(AuthService);
  carritoService = inject(CarritoService);
  private categoriasService = inject(CategoriasService);
  private router = inject(Router);

  // Observables que el template consume con async pipe
  usuario$ = this.authService.usuario$;
  totalItems$ = this.carritoService.totalItems$;

  // Estado del drawer lateral
  drawerOpen = false;
  // Submenú de categorías expandido
  categoriasExpanded = false;
  // Lista de categorías
  categorias: Categoria[] = [];

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.carritoService.getCarrito().subscribe();
    }
    // Cargamos las categorías para el menú
    this.categoriasService.getAll().subscribe({
      next: (cats) => this.categorias = cats
    });
  }

  openDrawer() {
    this.drawerOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    this.drawerOpen = false;
    this.categoriasExpanded = false;
    document.body.style.overflow = '';
  }

  toggleCategorias() {
    this.categoriasExpanded = !this.categoriasExpanded;
  }

  navigateTo(path: string, queryParams?: any) {
    this.closeDrawer();
    if (queryParams) {
      this.router.navigate([path], { queryParams });
    } else {
      this.router.navigate([path]);
    }
  }

  logout() {
    this.authService.logout();
    this.closeDrawer();
  }

  // Cierra el drawer si se hace click en el overlay
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.drawerOpen) {
      this.closeDrawer();
    }
  }
}