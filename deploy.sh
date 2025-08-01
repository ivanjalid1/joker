#!/bin/bash

# Script de deploy para Joker Casino Landing Page
# Construye el proyecto y prepara para deployment

echo "🎰 Iniciando build de Joker Casino Landing Page..."

# Verificar que Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ primero."
    exit 1
fi

# Verificar que npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instala npm primero."
    exit 1
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
fi

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf dist/

# Construir proyecto
echo "🔨 Construyendo proyecto..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error en el build"
    exit 1
fi

# Verificar que se generó la carpeta dist
if [ ! -d "dist" ]; then
    echo "❌ No se generó la carpeta dist"
    exit 1
fi

echo "✅ Build completado exitosamente!"
echo "📁 Los archivos están listos en la carpeta 'dist/'"
echo ""
echo "🚀 Opciones de deploy:"
echo "   • Netlify: Arrastra la carpeta 'dist' a netlify.com/drop"
echo "   • Vercel: Conecta tu repositorio en vercel.com"
echo "   • GitHub Pages: Configura GitHub Actions con Astro"
echo "   • FTP: Sube el contenido de 'dist' a tu servidor"
echo ""
echo "📱 No olvides actualizar los números de WhatsApp en src/pages/index.astro"
echo "🎰 ¡Tu landing page de Joker Casino está lista!"