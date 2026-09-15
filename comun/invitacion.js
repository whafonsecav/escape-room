/* ==================================================================
   INVITACIÓN A LA CELEBRACIÓN DE NOAH
   ------------------------------------------------------------------
   Motor compartido. Cada familia tiene su carpeta con un index.html
   que define la constante FAMILIA y carga este archivo.

   Para invitar a alguien más: copia una carpeta, cambia FAMILIA y
   listo. Los datos del evento viven aquí abajo, en un solo lugar.
   ================================================================== */

const EVENTO = {
  diaSemana: "Sábado",
  fecha:     "10 de octubre",
  hora:      "12:30 del mediodía",
  lugar:     "La casa de la mamita",
  plan:      "Almuerzo y tarde de diversión",

  // Para la cuenta regresiva (mes normal: 10 = octubre)
  cuando: { anio:2026, mes:10, dia:10, hora:12, minuto:30 },

  // Link corto de Google Maps: en celular abre directo la app de mapas
  ubicacion: "https://maps.app.goo.gl/5PxhmZWkUpTtSuLq8",

  // La nota del detalle para Noah (se muestra como una tarjeta más)
  regalo: "Tráiganle su primer regalo",

  // Número que recibe las confirmaciones (57 = Colombia)
  whatsapp: "573176708598",

  // Música de la celebración
  audio: "../assets/Audio%20Invitacion.mp3",
  volumen: 0.6
};

(function () {
  'use strict';

  var $ = function (s) { return document.querySelector(s); };
  var COLORES = ['#ff8fab','#ffc14d','#7ed9a0','#8fd3ff','#c9a0ff','#ff6f61','#ffe08a'];

  /* ==================================================================
     1. LA PÁGINA
     ================================================================== */
  document.body.innerHTML = [
    '<div class="fondo"></div>',
    '<div class="globos" id="globos"></div>',
    '<div class="confeti" id="confeti"></div>',

    '<main class="escenario" id="escenario">',

      // --- Portada: el sobre cerrado ---
      '<section class="escena activa" id="e-sobre">',
        '<div class="dentro">',
          '<div class="sube cintillo">Una invitación</div>',
          '<h1 class="sube para">' + FAMILIA.para + '</h1>',
          '<div class="sube sobre-zona">',
            '<span class="pulso"></span><span class="pulso b"></span>',
            '<div class="sobre" id="sobre" role="button" tabindex="0" aria-label="Abrir la invitación"><span>💌</span></div>',
          '</div>',
          '<div class="sube toque"><span class="dedo">👆</span> Toca el sobre para abrirlo</div>',
          '<p class="sube linea tenue">Hay algo que celebrar,<br>y no queremos hacerlo sin ustedes.</p>',
        '</div>',
      '</section>',

      // --- La noticia ---
      '<section class="escena" id="e-noticia">',
        '<div class="dentro">',
          '<div class="sube cintillo">🍼 Se viene algo grande 🎈</div>',
          '<p class="sube invita">Ya viene en camino<br>el nuevo integrante de la familia</p>',
          '<h2 class="sube nombre">Noah</h2>',
          '<p class="sube linea">Hemos querido preparar algo muy especial para <b>Andrés y Cristina</b>, y celebrarlo rodeados de la familia.</p>',
          '<p class="sube linea tenue">' + FAMILIA.noticia + '</p>',
        '</div>',
      '</section>',

      // --- Los detalles ---
      '<section class="escena" id="e-datos">',
        '<div class="dentro">',
          '<div class="sube cintillo">Aparten el día</div>',

          '<div class="sube fecha-bloque">',
            '<span class="fecha-mes">' + EVENTO.diaSemana + '</span>',
            '<span class="fecha-dia">' + EVENTO.fecha + '</span>',
            '<span class="fecha-hora">' + EVENTO.hora + '</span>',
          '</div>',

          '<div class="sube cuenta" aria-label="Cuenta regresiva">',
            '<div><b id="cd-d">00</b><span>días</span></div>',
            '<div><b id="cd-h">00</b><span>horas</span></div>',
            '<div><b id="cd-m">00</b><span>min</span></div>',
            '<div><b id="cd-s">00</b><span>seg</span></div>',
          '</div>',

          '<div class="sube dato">',
            '<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg></span>',
            '<span><span class="k">Dónde</span><span class="v">' + EVENTO.lugar + '</span></span>',
          '</div>',

          '<div class="sube dato">',
            '<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v8a3 3 0 0 0 6 0V3M7 11v10"/><path d="M17 3c-2 2-2.5 4-2.5 6.5S16 13 17 13v8"/></svg></span>',
            '<span><span class="k">El plan</span><span class="v">' + EVENTO.plan + '</span></span>',
          '</div>',

          '<div class="sube dato">',
            '<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12"/><path d="M12 9S10.5 3 8 3a2.5 2.5 0 0 0 0 5h4zM12 9s1.5-6 4-6a2.5 2.5 0 0 1 0 5h-4z"/></svg></span>',
            '<span><span class="k">Para Noah</span><span class="v">' + EVENTO.regalo + '</span></span>',
          '</div>',

          '<div class="sube acciones">',
            '<a class="btn" id="btn-rsvp" href="#" target="_blank" rel="noopener">',
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5z"/></svg>',
              'Confirmar asistencia',
            '</a>',
            '<a class="btn hueco" id="btn-mapa" href="#" target="_blank" rel="noopener">',
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20l-6 2V6l6-2 6 2 6-2v16l-6 2-6-2z"/><path d="M9 4v16M15 6v16"/></svg>',
              'Abrir ubicación',
            '</a>',
          '</div>',

          '<p class="sube firma">Los esperamos con todo el amor.</p>',
        '</div>',
      '</section>',

    '</main>',

    '<button class="sonido" id="btn-sonido" type="button" aria-label="Silenciar la música">',
      '<svg class="suena" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
      '<svg class="mudo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/></svg>',
    '</button>',

    '<button class="btn siguiente" id="btn-siguiente" type="button" hidden>',
      '<span id="btn-siguiente-txt">Ver los detalles</span>',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>',
    '</button>'
  ].join('');

  var E = { sobre:$('#e-sobre'), noticia:$('#e-noticia'), datos:$('#e-datos') };
  var actual = E.sobre;

  /* Enlaces de acción */
  $('#btn-mapa').href = EVENTO.ubicacion;
  $('#btn-rsvp').href = 'https://wa.me/' + EVENTO.whatsapp +
                        '?text=' + encodeURIComponent(FAMILIA.mensaje);

  /* ==================================================================
     2. ESCENAS (con la red de seguridad anti-recorte)
     ================================================================== */
  function ajustar() {
    var d = actual.querySelector('.dentro');
    if (!d) { return; }
    d.style.transform = '';
    var cs = getComputedStyle(actual);
    var libre = actual.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    var pide = d.scrollHeight;
    if (pide > libre && libre > 0) {
      d.style.transformOrigin = 'center center';
      d.style.transform = 'scale(' + Math.max(0.6, libre / pide).toFixed(4) + ')';
    }
  }
  function mostrar(nueva) {
    if (nueva === actual) { return; }
    var vieja = actual;
    vieja.classList.remove('activa');
    vieja.classList.add('saliendo');
    setTimeout(function () { vieja.classList.remove('saliendo'); }, 520);
    actual = nueva;
    actual.classList.add('activa');
    ajustar();
  }

  /* ==================================================================
     3. CELEBRACIÓN: confeti y globos
     ================================================================== */
  function lanzarConfeti(cuantos, ventana) {
    var caja = $('#confeti');
    var frag = document.createDocumentFragment();
    for (var i = 0; i < cuantos; i++) {
      var p = document.createElement('i');
      p.style.left = (Math.random() * 100).toFixed(2) + '%';
      p.style.background = COLORES[Math.floor(Math.random() * COLORES.length)];
      p.style.setProperty('--desvio', (Math.random() * 140 - 70).toFixed(0) + 'px');
      p.style.setProperty('--giro', (Math.random() * 900 + 360).toFixed(0) + 'deg');
      p.style.animationDuration = (Math.random() * 1.8 + 2.2).toFixed(2) + 's';
      p.style.animationDelay = (Math.random() * (ventana || 1.2)).toFixed(2) + 's';
      if (Math.random() > .6) { p.style.borderRadius = '50%'; p.style.height = '8px'; }
      frag.appendChild(p);
    }
    caja.appendChild(frag);
    setTimeout(function () { caja.innerHTML = ''; }, ((ventana || 1.2) + 4.5) * 1000);
  }

  function soltarGlobos() {
    var caja = $('#globos');
    if (caja.dataset.puesto) { return; }
    caja.dataset.puesto = '1';
    var frag = document.createDocumentFragment();
    var total = window.matchMedia('(max-width:420px)').matches ? 9 : 14;
    for (var i = 0; i < total; i++) {
      var g = document.createElement('span');
      g.className = 'globo';
      g.style.left = (Math.random() * 92 + 2).toFixed(2) + '%';
      g.style.background = COLORES[i % COLORES.length];
      g.style.setProperty('--vaiven', (Math.random() * 70 - 35).toFixed(0) + 'px');
      g.style.animationDuration = (Math.random() * 8 + 11).toFixed(1) + 's';
      g.style.animationDelay = (-Math.random() * 12).toFixed(1) + 's';
      frag.appendChild(g);
    }
    ['👶','🍼','🧸','🎈'].forEach(function (emo, k) {
      var b = document.createElement('span');
      b.className = 'bebe';
      b.textContent = emo;
      b.style.left = (12 + k * 22 + Math.random() * 8).toFixed(2) + '%';
      b.style.setProperty('--vaiven', (Math.random() * 60 - 30).toFixed(0) + 'px');
      b.style.animationDuration = (Math.random() * 7 + 14).toFixed(1) + 's';
      b.style.animationDelay = (-Math.random() * 10).toFixed(1) + 's';
      frag.appendChild(b);
    });
    caja.appendChild(frag);
  }

  /* ==================================================================
     4. MÚSICA (arranca con el primer toque, como exigen los navegadores)
     ================================================================== */
  var Sonido = (function () {
    var pista = null, callado = false, arrancado = false;
    function fundir(a, destino, ms) {
      clearInterval(a._fade);
      var ini = a.volume, t0 = Date.now();
      a._fade = setInterval(function () {
        var p = Math.min(1, (Date.now() - t0) / ms);
        a.volume = Math.max(0, Math.min(1, ini + (destino - ini) * p));
        if (p >= 1) { clearInterval(a._fade); }
      }, 50);
    }
    return {
      arrancar: function () {
        if (arrancado) { return; }
        arrancado = true;
        pista = new Audio(EVENTO.audio);
        pista.loop = true;
        pista.volume = 0;
        var intento = pista.play();
        if (intento && intento.catch) { intento.catch(function () {}); }
        fundir(pista, EVENTO.volumen, 1400);
      },
      alternarSilencio: function () {
        callado = !callado;
        if (pista) { fundir(pista, callado ? 0 : EVENTO.volumen, 300); }
        return callado;
      }
    };
  })();

  document.addEventListener('pointerdown', function () { Sonido.arrancar(); }, { once:true });
  $('#btn-sonido').addEventListener('click', function (e) {
    e.stopPropagation();
    Sonido.arrancar();
    this.classList.toggle('callado', Sonido.alternarSilencio());
  });

  /* ==================================================================
     5. CUENTA REGRESIVA (con la hora del propio equipo)
     ================================================================== */
  var cuentaTimer = null;
  function arrancarCuenta() {
    var c = EVENTO.cuando;
    var meta = new Date(c.anio, c.mes - 1, c.dia, c.hora, c.minuto, 0);
    function pintar() {
      var falta = meta - new Date();
      if (falta <= 0) {
        var caja = document.querySelector('.cuenta');
        if (caja && !caja.dataset.listo) {
          caja.dataset.listo = '1';
          caja.innerHTML = '<div style="flex:1"><b>¡HOY!</b><span>es el día</span></div>';
        }
        return;
      }
      var s = Math.floor(falta / 1000);
      $('#cd-d').textContent = ('0' + Math.floor(s / 86400)).slice(-2);
      $('#cd-h').textContent = ('0' + Math.floor((s % 86400) / 3600)).slice(-2);
      $('#cd-m').textContent = ('0' + Math.floor((s % 3600) / 60)).slice(-2);
      $('#cd-s').textContent = ('0' + (s % 60)).slice(-2);
    }
    pintar();
    if (!cuentaTimer) { cuentaTimer = setInterval(pintar, 1000); }
  }

  /* ==================================================================
     6. RECORRIDO — nada avanza solo, siempre con un toque
     ================================================================== */
  function abrirSobre() {
    Sonido.arrancar();
    lanzarConfeti(80, 1.4);
    soltarGlobos();
    mostrar(E.noticia);
    $('#btn-siguiente-txt').textContent = 'Ver los detalles';
    $('#btn-siguiente').hidden = false;
  }
  $('#sobre').addEventListener('click', abrirSobre);
  $('#sobre').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirSobre(); }
  });

  $('#btn-siguiente').addEventListener('click', function () {
    this.hidden = true;
    mostrar(E.datos);
    arrancarCuenta();
    lanzarConfeti(40, 1);
  });

  /* ==================================================================
     7. BLINDAJE ANTI-SCROLL + REAJUSTES
     ================================================================== */
  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive:false });
  document.addEventListener('gesturestart', function (e) { e.preventDefault(); });
  document.addEventListener('dblclick', function (e) { e.preventDefault(); });
  window.addEventListener('scroll', function () { window.scrollTo(0, 0); }, { passive:true });

  var temp;
  function reajustar() { clearTimeout(temp); temp = setTimeout(ajustar, 120); }
  window.addEventListener('resize', reajustar);
  window.addEventListener('orientationchange', reajustar);
  if (window.visualViewport) { window.visualViewport.addEventListener('resize', reajustar); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(ajustar); }
  window.addEventListener('load', ajustar);
  ajustar();
})();
