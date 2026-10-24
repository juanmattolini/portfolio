# Portfolio de Juan Mattolini

Página estática (sin build) publicada con GitHub Pages.

- `index.html`: toda la página.
- `videos/`: copias de los renders finales de App Casa.
- `posters/`: portada de cada video (frame en el segundo 4).

Para agregar un video: copiar el mp4 a `videos/`, sacar la portada con
`ffmpeg -ss 4 -i videos/X.mp4 -frames:v 1 -vf scale=540:-2 posters/X.jpg`
y sumar un `<li class="reel">` en `index.html`.
