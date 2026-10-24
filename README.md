# Portfolio de Juan Mattolini

Página estática (sin build) publicada con GitHub Pages: desarrollo de apps y soluciones a medida.

- `index.html`: portada general (proyectos, servicios, cómo trabajo, contacto).
- `app-casa.html`, `alterna.html`, `turnos.html` y `asistente-ia.html`: detalle de cada proyecto.
- `demos/turnos/` y `demos/asistente/`: demos que se pueden probar en el navegador, sin servidor (los datos quedan en localStorage).
- `styles.css`: estilos compartidos.
- `videos/` y `posters/`: videos de los proyectos y su portada (frame en el segundo 4 o 9).

Para sumar un proyecto: copiar una página de detalle, agregar su tarjeta en `index.html`
y sacar la portada con `ffmpeg -ss 4 -i videos/X.mp4 -frames:v 1 -vf scale=540:-2 posters/X.jpg`.
