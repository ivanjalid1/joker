# 🎰 Joker Casino - Landing Page

Landing page oficial optimizada para móviles del casino online Joker, desarrollada con Astro para máximo rendimiento.

## 🚀 Características

- **Mobile-First**: Diseñado específicamente para dispositivos móviles
- **Zero JavaScript**: Carga instantánea con HTML estático
- **SEO Optimizado**: Meta tags y estructura semántica
- **Responsive**: Se adapta perfectamente a cualquier pantalla
- **Accesible**: Cumple con estándares de accesibilidad web

## 📱 Funcionalidades

### Botones de Acción
1. **SOY NUEVO, QUIERO CREAR USUARIO**
   - Redirige a WhatsApp para registro
   - Texto predefinido para facilitar la conversación

2. **YA TENGO CUENTA**
   - Modal con información de próximas funcionalidades
   - Opción de contacto por WhatsApp

### Configuración de WhatsApp
Los números de WhatsApp se pueden actualizar fácilmente en el archivo `src/pages/index.astro`:

```astro
const WHATSAPP_NUMBERS = {
  ADQUISICION: '1234567890', // Cambiar por el número real
  SOPORTE: '1234567891'      // Cambiar por el número real
};
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout base con meta tags y CSS global
└── pages/
    └── index.astro           # Página principal

public/
└── images/
    ├── JokerYCelus.png      # Logo principal
    └── simbolo-2.png        # Símbolo secundario
```

## 🎨 Paleta de Colores

- **Dorado**: `#FFD700` - Elementos principales y acentos
- **Naranja**: `#FFA500` - Gradientes y hover states
- **Negro**: `#000000` - Fondo principal
- **Gris Oscuro**: `#1a1a1a` - Fondos secundarios
- **Blanco**: `#ffffff` - Texto principal

## 📱 Optimizaciones Móviles

- **Touch Targets**: Botones de mínimo 44px de altura
- **Viewport**: Configuración optimizada para móviles
- **Fonts**: Carga optimizada con preconnect
- **Images**: Lazy loading y optimización automática
- **Animations**: Suaves y optimizadas para rendimiento

## 🔧 Personalización

### Cambiar Números de WhatsApp
Edita las constantes en `src/pages/index.astro`:

```astro
const WHATSAPP_NUMBERS = {
  ADQUISICION: 'TU_NUMERO_AQUI',
  SOPORTE: 'TU_NUMERO_AQUI'
};
```

### Actualizar Imágenes
Reemplaza los archivos en `public/images/`:
- `JokerYCelus.png` - Logo principal
- `simbolo-2.png` - Símbolo/favicon

### Modificar Estilos
Los estilos están organizados de forma modular:
- Layout global: `src/layouts/Layout.astro`
- Estilos específicos: `src/pages/index.astro`

## 🚀 Deploy

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### Vercel
```bash
npm run build
# Configurar vercel.json si es necesario
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions con el workflow de Astro
```

## 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de Joker Casino. Todos los derechos reservados.

## 📞 Soporte

Para soporte técnico o modificaciones, contacta al equipo de desarrollo.

---

**Joker Casino** - Juego Responsable +18