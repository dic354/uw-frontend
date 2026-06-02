# UrbanWear - Frontend Angular

Frontend moderno de e-commerce de moda urbana desarrollado con **Angular 18**, **TypeScript** y **Bootstrap**. Interfaz completa con autenticación JWT, carrito de compras, checkout, perfil de usuario y panel de administración.

---

## Stack Tecnológico

[![Angular](https://img.shields.io/badge/Angular-18.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![RxJS](https://img.shields.io/badge/RxJS-7.8.0-EB4747?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![npm](https://img.shields.io/badge/npm-9%2B-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20CDN-4B90E2?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![ngx-translate](https://img.shields.io/badge/ngx--translate-i18n-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://github.com/ngx-translate/core)

---

## 📋 Tabla de Contenidos

1. [Dependencias](#-dependencias)
2. [Estructura de Proyectos](#-estructura-de-proyectos)
3. [Autenticación y Autorización](#-autenticación-y-autorización)
4. [Servicios Core](#-servicios-core)
5. [Componentes Features](#-componentes-features)
6. [Componentes Compartidos](#-componentes-compartidos)
7. [Interceptores y Guards](#-interceptores-y-guards)
8. [Modelos de Datos](#-modelos-de-datos)
9. [Rutas y Navegación](#-rutas-y-navegación)
10. [Flujos de Usuario](#-flujos-de-usuario)
11. [Seguridad](#-seguridad)
12. [Recursos](#-recursos)

---

## 📦 Dependencias

### **Angular Core** (v18.2.0)
```
@angular/animations        - Animaciones CSS
@angular/common           - Pipes, directivas comunes
@angular/compiler         - Compilador de templates
@angular/core             - Framework principal
@angular/forms            - Formularios reactivos y plantilla
@angular/platform-browser - DOM y APIs del navegador
@angular/router           - Enrutamiento SPA
```

### **Librerías Principales**
```
bootstrap              ^5.3.8  - Framework CSS responsive
bootstrap-icons       ^1.13.1 - 1000+ iconos SVG
rxjs                  ~7.8.0  - Observables y operadores
@ngx-translate/core   ^17.0.0 - Internacionalización (i18n)
```

### **DevDependencies**
```
@angular-devkit/build-angular  - Herramientas de build
@angular/cli                    - CLI de Angular
@angular/compiler-cli           - Compilador TypeScript
typescript                      ~5.5.2 - Lenguaje tipado
karma / jasmine                 - Testing unitario
```

---

## 🏭 Estructura de Proyectos

```
frontend/
├── src/
│   ├── index.html
│   ├── main.ts                 # Bootstrap de la aplicación
│   ├── styles.scss             # Estilos globales
│   │
│   └── app/
│       ├── app.component.ts    # Componente raíz (Navbar + Footer + outlet)
│       ├── app.component.html/scss
│       ├── app.config.ts       # Configuración global (providers, interceptores)
│       ├── app.routes.ts       # Definición de rutas con lazy loading
│       │
│       ├── core/               # SERVICIOS Y GUARDS (singleton)
│       │   ├── guards/
│       │   │   ├── auth.guard.ts
│       │   │   ├── no-auth.guard.ts
│       │   │   └── admin.guard.ts
│       │   │
│       │   ├── interceptors/
│       │   │   └── auth.interceptor.ts
│       │   │
│       │   ├── services/
│       │   │   ├── auth.service.ts
│       │   │   ├── usuarios.service.ts
│       │   │   ├── productos.service.ts
│       │   │   ├── categorias.service.ts
│       │   │   ├── carrito.service.ts
│       │   │   ├── pedidos.service.ts
│       │   │   ├── resenas.service.ts
│       │   │   ├── descuentos.service.ts
│       │   │   ├── producto-imagen.service.ts
│       │   │   └── cloudinary.service.ts
│       │   │
│       │   └── models/
│       │       ├── usuario.model.ts
│       │       ├── producto.model.ts
│       │       ├── categoria.model.ts
│       │       ├── carrito.model.ts
│       │       ├── pedido.model.ts
│       │       ├── resena.model.ts
│       │       └── descuento.model.ts
│       │
│       ├── features/           # COMPONENTES POR FEATURE (lazy loaded)
│       │   ├── home/
│       │   │   ├── home.component.ts
│       │   │   ├── home.component.html
│       │   │   └── home.component.scss
│       │   │
│       │   ├── catalogo/       # Búsqueda, filtros, paginación
│       │   ├── producto/       # Detalle, reseñas, carrito
│       │   │
│       │   ├── auth/
│       │   │   ├── login/
│       │   │   ├── register/
│       │   │   └── forgot-password/
│       │   │
│       │   ├── carrito/        # Vista del carrito
│       │   ├── checkout/       # Finalización de compra
│       │   ├── perfil/         # Perfil, contraseña, pedidos
│       │   ├── admin/          # Dashboard admin
│       │   ├── legal/          # Términos de servicio
│       │   └── not-found/      # Página 404
│       │
│       ├── shared/             # COMPONENTES REUTILIZABLES
│       │   ├── navbar/
│       │   ├── footer/
│       │   └── image-upload/
│       │
│       └── environments/
│           ├── environment.ts
│           ├── environment.prod.ts
│           └── environment.staging.ts
│
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── karma.conf.js
```

---

## 🔐 Autenticación y Autorización

### **Flujo de Autenticación**

```
1. REGISTRO (POST /auth/register)
   ├─ Usuario completa formulario
   ├─ authService.register(dto)
   ├─ Backend valida y crea usuario
   └─ Redirige a login

2. LOGIN (POST /auth/login)
   ├─ authService.login(dto)
   ├─ Recibe { access_token, usuario }
   ├─ Almacena token en localStorage
   ├─ Emite usuario en BehaviorSubject$
   └─ Redirige a home

3. PETICIONES AUTENTICADAS
   ├─ AuthInterceptor lee token de localStorage
   ├─ Añade "Authorization: Bearer {token}"
   └─ Petición se envía con autenticación

4. LOGOUT
   ├─ Elimina token de localStorage
   ├─ Limpia usuario en BehaviorSubject$
   └─ Redirige a /auth/login
```

### **Guards del Frontend**

| Guard | Propósito | Ubicación |
|---|---|---|
| **authGuard** | Permite solo si usuario está autenticado | `core/guards/auth.guard.ts` |
| **noAuthGuard** | Permite solo si usuario NO está autenticado | `core/guards/no-auth.guard.ts` |
| **adminGuard** | Permite solo si usuario es administrador | `core/guards/admin.guard.ts` |

### **Interceptor de Autenticación**

```typescript
// auth.interceptor.ts
// Añade JWT a todas las peticiones HTTP (excepto Cloudinary)
// Automáticamente inyectado en app.config.ts
```

---

## 📡 Servicios Core

### **1. AuthService** - Gestión de Autenticación

**Responsabilidad:** Autenticación, gestión de token JWT, estado de usuario

```typescript
// Propiedades
usuario$: Observable<Usuario | null>    // Stream del usuario autenticado
getToken(): string | null               // Obtiene JWT del localStorage
isLoggedIn(): boolean                   // Verifica si hay token válido
isAdmin(): boolean                      // Verifica si usuario es admin

// Métodos
register(dto: RegisterDto)              // POST /auth/register
login(dto: LoginDto)                    // POST /auth/login (guarda token)
logout()                                // Limpia token y localStorage
```

**Flujo:**
1. `login()` → envía credenciales al backend
2. Recibe `{ access_token, usuario }`
3. Guarda token en `localStorage`
4. Emite usuario en `usuarioActual$` (BehaviorSubject)
5. Todos los componentes suscritos se actualizan vía `usuario$` (Observable público)

---

### **2. ProductosService** - Catálogo de Productos

**Responsabilidad:** Búsqueda, filtrado y gestión de productos

```typescript
// Métodos públicos
getAll(filtros?: FiltroProducto): Observable<ProductosResponse>
// GET /productos?nombre=x&categoriaId=1&precioMin=10&precioMax=100&pagina=1&limite=12
// Soporta filtros: nombre, categoriaId, precioMin, precioMax, talla, color, pagina, limite

getOne(id: number): Observable<Producto>
// GET /productos/:id
// Devuelve producto completo con categoría, imágenes y reseñas

// Métodos solo admin
create(dto: CreateProductoDto): Observable<Producto>
update(id: number, dto: Partial<CreateProductoDto>): Observable<Producto>
delete(id: number): Observable<any>
```

---

### **3. CarritoService** - Gestión del Carrito

**Responsabilidad:** Sincronización del carrito, contador en navbar

```typescript
// Observables
totalItems$: Observable<number>  // Items en el carrito (para navbar)

// Métodos
getCarrito(): Observable<CarritoResponse>
// GET /carrito
// { items: [...], total, totalItems }

addItem(dto: AddCarritoDto): Observable<any>
// POST /carrito
// { productoId, cantidad }
// Actualiza totalItems$ automáticamente

updateItem(id: number, dto: UpdateCarritoDto): Observable<any>
removeItem(id: number): Observable<any>
clearCarrito(): Observable<any>
```

---

### **4. UsuariosService** - Perfil de Usuario

**Responsabilidad:** Gestión del perfil, cambio de contraseña

```typescript
getMe(): Observable<Usuario>
// GET /usuarios/me
// Datos completos del usuario autenticado

updateMe(dto: UpdateUsuarioDto): Observable<Usuario>
// PUT /usuarios/me
// Actualiza: nombre, email, teléfono, dirección, ciudad, codigoPostal

changePassword(dto: ChangePasswordDto): Observable<any>
// PUT /usuarios/me/password
// { contrasenaActual, contrasenaNueva }
```

---

### **5. PedidosService** - Gestión de Pedidos

**Responsabilidad:** Crear pedidos, ver historial

```typescript
create(dto: CreatePedidoDto): Observable<Pedido>
// POST /pedidos
// { direccionEnvio, ciudadEnvio, codigoPostalEnvio, metodoPago, codigoDescuento? }

getMisPedidos(): Observable<Pedido[]>
// GET /pedidos/mis-pedidos

getOne(id: number): Observable<Pedido>
// GET /pedidos/:id
```

---

### **6. CloudinaryService** - Upload de Imágenes

**Responsabilidad:** Upload a Cloudinary, validación de archivos

```typescript
subirImagen(file: File): Observable<string>
// Sube imagen a carpeta 'urbanwear/productos'
// Retorna URL HTTPS

subirImagenCategoria(file: File): Observable<string>
// Sube imagen a carpeta 'urbanwear/categorias'

validarImagen(file: File): { valido: boolean; error: string }
// Validación local: tipo (JPG, PNG, WebP, GIF) y tamaño (max 5MB)
```

---

### **Otros Servicios**

| Servicio | Propósito |
|---|---|
| **CategoriasService** | GET categorías, CRUD (admin) |
| **ResenasService** | Ver reseñas, crear, actualizar, eliminar |
| **DescuentosService** | Validar códigos de descuento, CRUD (admin) |
| **ProductoImagenService** | Gestión de imágenes adicionales |

---

## 🎨 Componentes Features

### **1. HomeComponent** - Página de Inicio

**Ubicación:** `features/home/`

**Responsabilidad:** Landing page con productos destacados y colecciones

```typescript
nuevasLlegadas: Producto[]           // Últimos 3 productos
colecciones: ColeccionDestacada[]    // Primeras 3 categorías

// Métodos
cargarNuevasLlegadas()               // GET últimos productos
cargarColecciones()                  // GET categorías + imagen de portada
suscribirNewsletter()                // Captura email newsletter
```

**Funcionalidades:**
- Hero section con CTA
- Grid de nuevas llegadas con enlaces a producto
- Colecciones por categoría con imagen
- Newsletter subscription (UI only)

---

### **2. CatalogoComponent** - Búsqueda y Filtrado

**Ubicación:** `features/catalogo/`

**Responsabilidad:** Página principal de productos con filtros avanzados y paginación

```typescript
productos: Producto[] = []
categorias: Categoria[] = []
paginaActual: number = 1
totalPaginas: number = 0

filtros: FiltroProducto = {
  nombre?: string
  categoriaId?: number
  precioMin?: number
  precioMax?: number
  talla?: Talla
  color?: string
  pagina: number
  limite: 12
}

// Métodos
cargarProductos()                    // Envía filtros al backend
filtrarPorCategoria(categoriaId?)    // Actualiza filtro
aplicarFiltros()                     // Aplica filtros y reset página 1
limpiarFiltros()                     // Reset todos los filtros
addToCart(producto)                  // Añade al carrito
```

**Funcionalidades:**
- Filtro por nombre (búsqueda parcial, input text)
- Filtro por categoría (dropdown)
- Filtro por rango de precio (sliders)
- Filtro por talla (checkboxes: XS, S, M, L, XL, XXL)
- Filtro por color (input text)
- Paginación con botones Anterior/Siguiente
- Botón "Añadir al carrito" por cada producto
- Requiere login para añadir al carrito

---

### **3. ProductoComponent** - Detalle de Producto

**Ubicación:** `features/producto/`

**Responsabilidad:** Página de detalle del producto con galería, reseñas y opción de carrito

```typescript
producto: Producto | null = null
resenas: ResenasResponse | null = null

tallaSeleccionada: Talla | null = null
cantidad: number = 1
imagenActiva: string = ''
intentoCompra: boolean = false  // Muestra error si no selecciona talla

nuevaResena = { puntuacion: 5, comentario: '' }

// Métodos
cargarProducto(id: number)          // GET /productos/:id
cargarResenas(id: number)           // GET reseñas del producto
cambiarImagen(url: string)          // Cambia imagen del viewer
incrementarCantidad()
decrementarCantidad()
addToCart()                         // Añade al carrito con talla
enviarResena()                      // POST nueva reseña
```

**Funcionalidades:**
- Galería de imágenes (principal + adicionales)
- Selector de talla (XS a XXL)
- Cantidad variable respetando stock
- Añadir al carrito (requiere talla seleccionada)
- Mostrar reseñas con puntuación (⭐⭐⭐⭐⭐)
- Calcular puntuación promedio
- Enviar reseña (solo usuarios autenticados)

---

### **4. LoginComponent** - Iniciar Sesión

**Ubicación:** `features/auth/login/`

**Responsabilidad:** Formulario de login con validaciones

```typescript
form: FormGroup = {
  email: ['', [Validators.required, Validators.email]],
  contrasena: ['', [Validators.required, Validators.minLength(8)]]
}

// Métodos
onSubmit()                          // Envía credentials al backend
togglePassword()                    // Mostrar/ocultar contraseña
```

**Funcionalidades:**
- Formulario reactivo con validaciones
- Email válido requerido
- Mínimo 8 caracteres en contraseña
- Toggle para mostrar/ocultar contraseña
- Link a registro y forgot-password
- Mensaje de error si credenciales incorrectas

---

### **5. RegisterComponent** - Registrarse

**Ubicación:** `features/auth/register/`

**Responsabilidad:** Formulario de registro con validación de contraseñas

```typescript
form: FormGroup = {
  nombre: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  contrasena: ['', [Validators.required, Validators.minLength(8)]],
  confirmarContrasena: ['', Validators.required]
}
// Validador de formulario: passwordsMatch()

// Métodos
onSubmit()                          // Envía registro
togglePassword() / toggleConfirm()  // Mostrar/ocultar
```

**Funcionalidades:**
- Validación de contraseñas coincidentes
- Email único (backend valida)
- Mínimo 8 caracteres
- Mensaje de error si email existe
- Link al login después del registro

---

### **6. CarritoComponent** - Carrito de Compra

**Ubicación:** `features/carrito/`

**Responsabilidad:** Vista del carrito con opciones de gestión

```typescript
carrito: CarritoResponse | null = null
// { items: [...], total, totalItems }

// Métodos
cargarCarrito()                     // GET /carrito
eliminarItem(id: number)            // DELETE /carrito/:id
vaciarCarrito()                     // DELETE /carrito (completo)
procederAlPago()                    // Navega a /checkout
calcularSubtotal(): number
```

**Funcionalidades:**
- Lista de items con imagen, nombre, precio unitario, cantidad, subtotal
- Eliminar items uno a uno
- Vaciar carrito completo
- Ver total final
- Botón para proceder a checkout
- Mensaje si carrito vacío

---

### **7. CheckoutComponent** - Finalizar Compra

**Ubicación:** `features/checkout/`

**Responsabilidad:** Completar pedido, aplicar descuentos, seleccionar método pago

```typescript
carrito: CarritoResponse | null = null
descuento: ValidacionDescuento | null = null

form: FormGroup = {
  direccionEnvio: ['', [Validators.required, Validators.minLength(5)]],
  ciudadEnvio: ['', [Validators.required, Validators.minLength(2)]],
  codigoPostalEnvio: ['', [Validators.required, Validators.minLength(5)]],
  metodoPago: ['tarjeta', Validators.required]
}

codigoDescuento: string = ''

// Métodos
cargarCarrito()                     // GET /carrito
cargarDatosUsuario()                // GET /usuarios/me (precargar dirección)
validarDescuento()                  // POST /descuentos/validar
procesarPago()                      // POST /pedidos
calcularTotal()                     // Con o sin descuento
```

**Funcionalidades:**
- Precargar dirección de perfil
- Validar dirección de envío
- 3 métodos de pago (tarjeta, PayPal, transferencia)
- Validar código de descuento (muestra porcentaje aplicado)
- Ver desglose de total (subtotal, descuento, total final)
- Botón procesar pago
- Redirige a perfil con success=true tras crear pedido

---

### **8. PerfilComponent** - Perfil de Usuario

**Ubicación:** `features/perfil/`

**Responsabilidad:** Gestión de datos personales, cambio contraseña, historial pedidos

```typescript
usuario: Usuario | null = null
pedidos: Pedido[] = []
seccionActiva: 'perfil' | 'pedidos' | 'direcciones' = 'perfil'

formPerfil: FormGroup     // Datos personales
formPassword: FormGroup   // Cambio contraseña

// Métodos
cargarUsuario()                     // GET /usuarios/me
cargarPedidos()                     // GET /pedidos/mis-pedidos
cambiarSeccion(seccion)
guardarPerfil()                     // PUT /usuarios/me
guardarPassword()                   // PUT /usuarios/me/password
```

**Funcionalidades:**
- Editar datos personales (nombre, email, teléfono, dirección, etc.)
- Cambiar contraseña con validaciones
- Ver historial completo de pedidos
- Ver estado de cada pedido
- Ver detalles de pedido individual

---

### **9. AdminComponent** - Panel Administrativo

**Ubicación:** `features/admin/`

**Responsabilidad:** Dashboard admin con CRUD para todas las entidades

```typescript
seccionActiva: 'dashboard' | 'productos' | 'categorias' | 'pedidos' | 'descuentos'

// Datos
productos: Producto[] = []
categorias: Categoria[] = []
pedidos: Pedido[] = []
descuentos: Descuento[] = []

// Stats
stats = {
  totalProductos: 0,
  totalPedidos: 0,
  totalCategorias: 0,
  totalDescuentos: 0
}

// Métodos por sección
cargarProductos()
abrirModalProducto(producto?: Producto)   // Modo crear/editar
guardarProducto()
eliminarProducto(id: number)
// Idem para categorías, descuentos

cambiarEstadoPedido(pedidoId: number, nuevoEstado: EstadoPedido)
```

**Funcionalidades:**
- Dashboard con stats (totales)
- **Gestión de Productos**: CRUD, upload imagen a Cloudinary
- **Gestión de Categorías**: CRUD, imagen de categoría
- **Gestión de Descuentos**: CRUD, validar fechas, límites de uso
- **Gestión de Pedidos**: Ver todos, cambiar estado, ver detalles
- Modales para crear/editar
- Tablas responsive
- Validación de formularios
- Mensajes de éxito/error

---

## 🧩 Componentes Compartidos

### **NavbarComponent** - Navegación Principal

**Ubicación:** `shared/navbar/`

**Responsabilidad:** Header con navegación, menú categorías, carrito

```typescript
usuario$ = this.authService.usuario$           // Observable del usuario
totalItems$ = this.carritoService.totalItems$  // Observable del contador

// Métodos
openDrawer() / closeDrawer()        // Toggle menú mobile
toggleCategorias()                  // Expandir/contraer submenu
navigateTo(path: string, queryParams?)
logout()                            // Logout
```

**Funcionalidades:**
- Logo clickable → home
- Menú de categorías (hover en desktop, expandible en mobile)
- Search box (opcional)
- Link al carrito con **contador en tiempo real** (vía Observable)
- Link al perfil (solo si logado)
- Login/Logout
- Link al admin (solo si admin)
- Drawer/Hamburger menu en mobile
- Overlay al abrir drawer

---

### **FooterComponent** - Pie de Página

**Ubicación:** `shared/footer/`

**Responsabilidad:** Footer con información y links

**Secciones:**
- About UrbanWear
- Customer Service
- Information
- Social Media Links
- Links dinámicos según usuario:
  - Si logado: Perfil, Mis Pedidos
  - Si admin: Panel Admin
  - Si no logado: Login, Registro

---

### **ImageUploadComponent** - Upload de Imágenes

**Ubicación:** `shared/image-upload/`

**Responsabilidad:** Componente reutilizable para subir imágenes a Cloudinary

```typescript
@Input() imagenActual = ''
@Input() tipo: 'producto' | 'categoria' = 'producto'
@Output() imagenSubida = new EventEmitter<string>()

// Métodos
onFileSelected(event: Event)        // Maneja selección de archivo
eliminarImagen()                    // Limpia preview y emite string vacío
```

**Funcionalidades:**
- Preview de imagen antes de subir
- Validación (tipo y tamaño) local
- Upload a Cloudinary (con feedback)
- Botón para eliminar imagen
- Emite URL al componente padre (patrón Output)

---

## 🚦 Interceptores y Guards

### **AuthInterceptor** - Inyección de JWT

**Ubicación:** `core/interceptors/auth.interceptor.ts`

**Responsabilidad:** Añadir JWT a todas las peticiones HTTP

```typescript
// Lógica:
if (URL incluye 'cloudinary.com') → pasar sin token (Cloudinary no acepta)
else → añadir "Authorization: Bearer {token}" a header

// Configuración en app.config.ts:
provideHttpClient(withInterceptors([authInterceptor]))
```

---

### **authGuard** - Requiere Login

**Ubicación:** `core/guards/auth.guard.ts`

**Responsabilidad:** Proteger rutas que requieren autenticación

```typescript
// Lógica:
if (authService.isLoggedIn()) → permite acceso
else → redirige a /auth/login
```

**Rutas protegidas:**
- `/carrito`
- `/checkout`
- `/perfil`
- `/admin`

---

### **noAuthGuard** - Requiere NO Estar Logado

**Ubicación:** `core/guards/no-auth.guard.ts`

**Responsabilidad:** Proteger rutas de auth (login, registro)

```typescript
// Lógica:
if (!authService.isLoggedIn()) → permite acceso
else → redirige a home (/)
```

**Rutas protegidas:**
- `/auth/login`
- `/auth/register`
- `/auth/forgot-password`

---

### **adminGuard** - Requiere Rol Admin

**Ubicación:** `core/guards/admin.guard.ts`

**Responsabilidad:** Proteger rutas admin

```typescript
// Lógica:
if (authService.isAdmin()) → permite acceso
else → redirige a home (/)
```

**Rutas protegidas:**
- `/admin`

---

## 📊 Modelos de Datos

### **Usuario**
```typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  telefono?: string
  direccion?: string
  ciudad?: string
  codigoPostal?: string
  rol: 'cliente' | 'administrador'
  fechaRegistro: string
}
```

### **Producto**
```typescript
interface Producto {
  id: number
  nombre: string
  descripcion?: string
  precio: number
  categoriaId: number
  stock: number
  talla?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  color?: string
  imagenUrl?: string
  activo: boolean
  fechaCreacion: string
  categoria?: Categoria
  imagenes?: ProductoImagen[]
  resenas?: Resena[]
}
```

### **Carrito**
```typescript
interface CarritoItem {
  id: number
  cantidad: number
  producto: Producto
}

interface CarritoResponse {
  items: CarritoItem[]
  total: string
  totalItems: number
}
```

### **Pedido**
```typescript
interface Pedido {
  id: number
  usuarioId: number
  fechaPedido: string
  estado: 'pendiente' | 'procesando' | 'enviado' | 'entregado' | 'cancelado'
  total: number
  direccionEnvio: string
  ciudadEnvio: string
  codigoPostalEnvio: string
  metodoPago: 'tarjeta' | 'paypal' | 'transferencia'
  detalles: DetallePedido[]
  descuento?: Descuento
}
```

### **Resena**
```typescript
interface Resena {
  id: number
  puntuacion: number  // 1-5
  comentario?: string
  fechaResena: string
  usuario: { id: number; nombre: string }
}
```

### **Descuento**
```typescript
interface Descuento {
  id: number
  codigo: string
  porcentaje: number
  fechaInicio: string
  fechaFin: string
  activo: boolean
  usosMaximos?: number
  usosActuales: number
}
```

---

## 🛣️ Rutas y Navegación

```typescript
// app.routes.ts

// RUTAS PÚBLICAS
'' → HomeComponent
'catalogo' → CatalogoComponent
'producto/:id' → ProductoComponent

// RUTAS AUTH (solo sin sesión - noAuthGuard)
'auth/login' → LoginComponent
'auth/register' → RegisterComponent
'auth/forgot-password' → ForgotPasswordComponent

// RUTAS PRIVADAS (requieren autenticación - authGuard)
'carrito' → CarritoComponent
'checkout' → CheckoutComponent
'perfil' → PerfilComponent

// RUTAS ADMIN (requieren admin - adminGuard)
'admin' → AdminComponent

// 404
'**' → NotFoundComponent
```

---

## 🔄 Flujos de Usuario

### **Flujo 1: Registro e Inicio de Sesión**

```
Usuario anónimo → Click en "Registrarse"
  ↓
RegisterComponent
  ├─ Completa: nombre, email, contraseña
  ├─ Frontend valida (FormGroup)
  ├─ authService.register(dto)
  └─ POST /auth/register

Backend valida y crea usuario
  ↓
Si éxito → router.navigate(['/auth/login'])
Si error (409) → "Email ya registrado"

Usuario en login:
  ├─ LoginComponent
  ├─ authService.login(dto)
  └─ POST /auth/login

Backend devuelve { access_token, usuario }
  ↓
Frontend:
  ├─ Guarda token en localStorage
  ├─ Emite usuario en usuario$
  └─ router.navigate(['/'])

RESULTADO: ✅ Usuario autenticado
```

### **Flujo 2: Añadir al Carrito**

```
Usuario en CatalogoComponent o ProductoComponent
  ├─ Selecciona talla (en ProductoComponent)
  ├─ Selecciona cantidad
  └─ Click en "Añadir al carrito"

Si NO está logado:
  └─ router.navigate(['/auth/login'])

Si está logado:
  ├─ carritoService.addItem({ productoId, cantidad })
  ├─ POST /carrito (con JWT)
  └─ Backend valida stock y crea/actualiza item

Si éxito:
  ├─ totalItems$ se incrementa (+1)
  ├─ Navbar muestra contador actualizado (vía Observable)
  └─ Mostrar "¡Producto añadido al carrito!"

RESULTADO: ✅ Item en carrito
```

### **Flujo 3: Realizar Compra**

```
Usuario hace click en "Ver carrito"
  ├─ CarritoComponent
  ├─ carritoService.getCarrito()
  └─ GET /carrito (lista items)

Usuario hace click en "Proceder al pago"
  └─ router.navigate(['/checkout'])
      └─ CheckoutComponent

Checkout:
  ├─ usuariosService.getMe() (precargar dirección)
  ├─ Usuario introduce dirección, ciudad, código postal
  ├─ Selecciona método de pago
  ├─ Opcionalmente introduce código descuento
  │  └─ descuentosService.validar({ codigo })
  │     └─ POST /descuentos/validar
  │        └─ Muestra porcentaje si válido
  └─ Click en "Procesar pago"
      └─ pedidosService.create(dto)
         └─ POST /pedidos

Backend (TRANSACCIÓN ATÓMICA):
  ├─ Valida carrito no vacío
  ├─ Valida stock de productos
  ├─ Calcula total
  ├─ Aplica descuento si viene código
  ├─ Crea pedido
  ├─ Copia items a detalles_pedido
  ├─ Actualiza stock de productos
  ├─ Incrementa contador de descuento
  └─ Vacía carrito

Si éxito (200 OK):
  ├─ Frontend limpia carrito
  ├─ totalItems$ = 0
  ├─ router.navigate(['/perfil'], { queryParams: { success: true } })
  └─ PerfilComponent muestra confirmación

RESULTADO: ✅ Pedido creado exitosamente
```

---

## 🔒 Seguridad

✅ **JWT con 7 días de expiración**
✅ **Token almacenado en localStorage** (localStorage es vulnerable a XSS, considerar sessionStorage en producción)
✅ **AuthInterceptor añade JWT automáticamente**
✅ **CORS configurado solo para frontend autorizado**
✅ **Validación de DTOs en frontend y backend**
✅ **Guards protegen rutas sensibles**
✅ **Cloudinary: no se envía JWT (interceptor excluye)**

---

## 📚 Recursos

- [Angular 18 Docs](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [RxJS Documentation](https://rxjs.dev)
- [Bootstrap 5 Components](https://getbootstrap.com/docs/5.3/components)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

**Última actualización:** Junio 2026
**Versión:** 1.0.0

