# Imágenes

Coloca aquí las imágenes optimizadas (preferiblemente WebP).

## Archivos esperados por la web

- `aranjuez-hero.webp` — Imagen del hero. Recomendación: vista del Palacio Real de Aranjuez o jardines, en orientación horizontal, mínimo 1600×1200px. Se aplica un degradado azul encima en el CSS, así que no necesita ser perfecta.
- `aranjuez-jardines.webp` — Imagen de la sección "Sobre nosotros". Recomendación: detalle de los jardines o un rincón con encanto de Aranjuez, en orientación vertical 4:5, mínimo 1200×1500px.

Si estos archivos no existen, la web sigue funcionando: el CSS aplica un fondo azul de respaldo con un patrón sutil.

## Cómo optimizar imágenes

Para convertir a WebP con buena calidad/peso:

```bash
# con cwebp (instalable con brew install webp)
cwebp -q 82 input.jpg -o aranjuez-hero.webp

# con ffmpeg
ffmpeg -i input.jpg -c:v libwebp -quality 82 aranjuez-hero.webp
```

Objetivo: peso por imagen ≤ 200 KB.

## Fotos sugeridas

Algunas fuentes libres de derechos:

- [Unsplash](https://unsplash.com/s/photos/aranjuez)
- [Pexels](https://www.pexels.com/es-es/buscar/aranjuez/)
- [Wikimedia Commons — Aranjuez](https://commons.wikimedia.org/wiki/Category:Aranjuez)
