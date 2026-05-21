# Imágenes por servicio

Cada página `/servicios/<slug>` busca su foto en `images/services/<slug>.webp`. Si el archivo no existe, se muestra un placeholder con el icono del servicio sobre fondo azul corporativo.

Archivos esperados (opcionales — la web funciona sin ellos):

- `contables.webp` — escritorio con documentos contables / calculadora
- `fiscales.webp` — papeles fiscales / sello de notificación
- `laborales.webp` — equipo en reunión / portátil con nóminas
- `controlling.webp` — gráficos financieros / dashboards en pantalla
- `empresarial.webp` — reunión estratégica / firma de constitución
- `otras.webp` — firma de contrato / papelería de despacho

Recomendaciones:
- Formato WebP, calidad ~82
- Proporción 4:3 o 16:9, mínimo 1200×900px
- Peso ≤ 250 KB por imagen
- Tono coherente: evitar fondos con saturación alta que choquen con el azul corporativo

Convertir a WebP:

```bash
cwebp -q 82 entrada.jpg -o contables.webp
```
