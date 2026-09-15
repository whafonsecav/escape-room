# SALA 01 — el escape room para Andrés y Cristina

Invitación web interactiva en forma de **escape room jugable**. Andrés y Cristina
entran a una sala cerrada y abren **siete cerraduras**, todas construidas con datos
reales de su vida.

Cada cerradura entrega **una letra**. Al final ellos mismos **arrastran las siete
letras** y arman la palabra: **FAMILIA**. Se abre la puerta, sale confeti, y ahí
llega la invitación de verdad — *nosotros, tu familia,* los invitamos a celebrar la
llegada de Noah con almuerzo y tarde de diversión.

Un solo archivo (`index.html`). Sin servidor, sin build, sin dependencias.

---

## ✏️ Qué editar

Todo está al final del archivo, dentro del `<script>`:

```js
const EVENTO = {
  diaSemana: "Sábado",
  fecha:     "10 de octubre",
  hora:      "12:30 del mediodía",
  lugar:     "La casa de la mamita",
  plan:      "Almuerzo y tarde de diversión",

  // para la cuenta regresiva (mes normal: 10 = octubre)
  cuando: { anio:2026, mes:10, dia:10, hora:12, minuto:30 },

  ubicacion: "https://maps.app.goo.gl/5PxhmZWkUpTtSuLq8",
  whatsapp: {
    numero:  "573176708598",
    mensaje: "Hola hija, recibimos la invitación. Nuestra respuesta es: ..."
  }
};
```

- **Confirmar invitación** abre WhatsApp (app nativa en iPhone y Android) con el
  mensaje ya escrito, listo para completar la respuesta.
- **Abrir ubicación** abre directo la app de mapas del celular.
- La **cuenta regresiva** usa la hora del propio equipo de quien abre el link.
  Verificado: el 10 de octubre de 2026 cae sábado.

Debajo están `CLAVES` (las respuestas) y `PISTAS` (tres por cerradura).

---

## 🔒 Las siete cerraduras

| # | Nivel | Reto | De dónde sale |
|---|-------|------|----------------|
| 1 | ●○○○○○○ | **¿De quién es esto?** — cuatro objetos | El tinto caliente y el merengón son de ella; las bermudas y el saco sin estrenar, de él |
| 2 | ●●○○○○○ | **Código de dos cifras** — `35` | 3 años de casados + los 5 de Bruno |
| 3 | ●●●○○○○ | **Tres parejas** — memoria de 12 casillas | Viajes, argollas, tinto, Bruno, apartamento, camioneta |
| — | — | *Interrupción: Bruno llorando bloquea el pasillo* | El llorón consentido |
| 4 | ●●●●○○○ | **Sellos del pasaporte** — marcar los cinco países | Portugal, Suiza, Italia, España y Chile |
| 5 | ●●●●●○○ | **El primer volante** — ¿en cuál aprendió Andrés a manejar? | El **Kia Picanto**: chiquito, prestado, ni siquiera era de ellos. Ahí perdió el miedo |
| 6 | ●●●●●●○ | **Encuentren la llave** — seis cajas iguales | La trampa: **la llave sale siempre en la última que abran**, sea cual sea. Así ven los cinco recuerdos sí o sí |
| 7 | ●●●●●●● | **Séptima en rojo** — tocar sólo en rojo, 3 veces, acelerando | La foto que paró el tráfico en la Carrera Séptima |

**La puerta final:** las 7 letras salen desordenadas y ellos las arrastran (o las
tocan) hasta formar FAMILIA. Si está mal, se sacude y las devuelve.

---

## ⏸️ Nada avanza solo

Al resolver cada cerradura aparece un botón **Siguiente** abajo. La pantalla se
queda quieta con el mensaje hasta que ellos decidan seguir — nadie se pierde una
frase por un salto automático.

Cada cerradura tiene además **3 pistas** pedibles en cualquier momento
(`Pista · 3`); la tercera prácticamente da la respuesta. Y hay una salida de
emergencia discreta (`ábranme, no quiero jugar →`) que regala las letras y los
lleva directo a armar la palabra.

---

## 🎉 El final

1. **¡Escaparon!** — confeti, globos, el tiempo que tardaron, y las 7 letras ya
   ordenadas para que vean que esa era la clave.
2. **La invitación** — *"Porque somos nosotros, tu familia"*, **Noah** en grande,
   con globos y cositas de bebé flotando.
3. **Cuándo y dónde** — fecha y hora juntas en un bloque, **cuenta regresiva en
   vivo** (días / horas / minutos / segundos), lugar y plan con iconos, y los dos
   botones de acción.

La sala arranca a 8 °C en negro y verde frío, y **se va calentando con cada letra
ganada**. Al abrir la puerta la paleta pasa a crema y terracota con una transición
de 1,8 s. No hay flashes ni saltos bruscos.

---

## 🎵 La música

Dos pistas, en `assets/`:

| Archivo | Cuándo suena |
|---|---|
| `Audio Suspenso.mp3` (2:20) | Toda la sala, desde el primer toque, **en bucle sin corte** |
| `Audio Invitacion.mp3` (3:54) | Entra cuando escapan, y se repite |

- **Bucle sin silencios**: 3 segundos antes de que el suspenso termine arranca una
  segunda copia y se cruzan los volúmenes. Nunca hay un corte.
- **Cambio al escapar**: el suspenso baja de 0.6 a 0 mientras la invitación sube de
  0 a 0.6, en 3 segundos exactos.
- Arranca con el **primer toque** en la pantalla (los navegadores no permiten audio
  automático antes de una interacción).
- Botón de **silencio** abajo a la izquierda, siempre disponible.
- Para cambiar las pistas: reemplaza los archivos en `assets/` conservando el
  nombre, o edita `AUDIO` al inicio del `<script>` (el volumen y los segundos de
  cruce también se ajustan ahí). Los espacios del nombre van como `%20` en la URL.

---

## 👨‍👩‍👧 Las tres invitaciones

Un mismo repositorio, tres páginas distintas:

| Para quién | URL | Qué es |
|---|---|---|
| **Andrés y Cristina** | `/escape-room/` | El escape room de 7 cerraduras (la sorpresa) |
| **Familia Beltrán Quiroga** | `/escape-room/familia-beltran-quiroga/` | Invitación directa a la celebración |
| **Sebastián y Laura** | `/escape-room/sebastian-laura/` | Invitación directa a la celebración |

Las dos invitaciones directas comparten diseño y motor:

```
comun/invitacion.css     estilos (paleta cálida, globos, confeti)
comun/invitacion.js      motor + DATOS DEL EVENTO (fecha, lugar, WhatsApp)
familia-beltran-quiroga/index.html   sólo define a quién va dirigida
sebastian-laura/index.html
```

**Para invitar a otra familia:** copia una carpeta, cámbiale el nombre y edita las
líneas de `FAMILIA` en su `index.html`. Nada más.

Una familia puede tener **su propia hora**: basta añadir `hora` y `cuando` a su
`FAMILIA` y manda la suya, también en la cuenta regresiva. Así, los Beltrán Quiroga
están citados a las 12:00 y el resto a las 12:30.

**Si cambia la fecha, el lugar, el plan o la nota del detalle para Noah:** se edita
una sola vez en `comun/invitacion.js` (y en `index.html` para el escape room).

Cada invitación tiene tres pantallas: un sobre que se toca para abrir → la noticia
con confeti y globos → los detalles con cuenta regresiva y los botones de confirmar
y ubicación. Suena la música de celebración desde el primer toque.

---

## 🚀 Publicado

**https://whafonsecav.github.io/escape-room/**

Repositorio `whafonsecav/escape-room`, GitHub Pages desde `main` / raíz. Para
actualizar: `git add -A && git commit -m "..." && git push`.

La vista previa del link en WhatsApp dice *"Andrés y Cristina: están encerrados"* —
sin spoilers.

---

## 📱 Notas técnicas

- **Cero scroll**: `100dvh`, `overflow:hidden`, `touch-action:none`,
  `position:fixed` en el `body`, `overscroll-behavior:none` y `touchmove`
  bloqueado.
- **Probado** en 375×667 (iPhone SE / 12 mini) y en 320×480: las 13 pantallas
  entran, y cuando el botón *Siguiente* está en pantalla la escena cede espacio
  abajo para no chocar con él.
- **Red de seguridad**: si el contenido no cabe, el JS lo escala en vez de
  recortarlo. Nunca se pierde texto.
- **`visibility` fuera de la transición CSS** (importante): si va dentro, la escena
  tarda ~0,45 s en volverse tocable y los arrastres no agarran al entrar.
- **Taps blindados en la memoria**: cinco toques simultáneos abren sólo dos
  cartas; tres toques sobre la misma cuentan uno.
- **Arrastre**: pointer events con captura; si sólo tocan la ficha también cae en
  el primer hueco libre. Tocar una ficha ya puesta la devuelve.
- Respeta `prefers-reduced-motion` (y ahí se apagan confeti y globos).
- Tipografías de Google Fonts con respaldo del sistema si no hay internet.
