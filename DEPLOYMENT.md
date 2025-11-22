# 📦 Instrucciones de Despliegue para Servidor

## Archivos para Subir a Tu Servidor

Los archivos listos para producción están en la carpeta **`dist`** después de ejecutar `npm run build`.

### Contenido de la carpeta `dist`:
```
dist/
├── index.html
├── assets/
│   └── index-[hash].js
└── index.css (si existe)
```

## 🚀 Pasos para Subir a Tu Servidor

### Opción 1: Subida Manual (FTP/SFTP)

1. **Construir el proyecto** (si no lo has hecho ya):
   ```bash
   npm run build
   ```

2. **Conectar a tu servidor** usando tu cliente FTP favorito (FileZilla, Cyberduck, etc.)

3. **Subir todos los archivos** de la carpeta `dist/` a la raíz de tu dominio o subdirectorio deseado

4. **Configurar el servidor** (importante):
   - Si usas Apache, asegúrate de tener un archivo `.htaccess` con:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   
   - Si usas Nginx, añade a tu configuración:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

### Opción 2: Despliegue Automático con GitHub Pages

1. El código ya está en GitHub: https://github.com/peterestelaweb/way-of-life-swift-payment-guide

2. Ve a **Settings** → **Pages** en tu repositorio

3. Selecciona la rama `main` y la carpeta `/` (root)

4. GitHub generará una URL automáticamente

### Opción 3: Netlify (Recomendado - Gratis y Fácil)

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta

2. Conecta tu repositorio de GitHub

3. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. Netlify desplegará automáticamente cada vez que hagas push a GitHub

### Opción 4: Vercel (También Gratis)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta

2. Importa tu repositorio de GitHub

3. Vercel detectará automáticamente que es un proyecto Vite

4. Deploy automático en cada push

## ✅ Verificación

Después de subir, verifica que:
- [ ] La página carga correctamente
- [ ] Los estilos se aplican (Tailwind CSS)
- [ ] Las animaciones funcionan
- [ ] Los botones de copiar funcionan
- [ ] La navegación entre secciones funciona

## 🔧 Solución de Problemas

### Los estilos no se cargan
- Verifica que todos los archivos de la carpeta `assets/` se hayan subido
- Revisa la consola del navegador para errores 404

### La página muestra 404 al recargar
- Necesitas configurar el servidor para redirigir todas las rutas a `index.html` (ver configuraciones arriba)

### Los archivos no se actualizan
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Verifica que subiste la versión más reciente de `dist/`

## 📞 Soporte

Si tienes problemas, revisa:
1. La consola del navegador (F12)
2. Los logs del servidor
3. Que todos los archivos se hayan subido correctamente

---

**Última actualización**: Noviembre 2025
