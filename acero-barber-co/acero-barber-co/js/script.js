/* =====================================================
   ACERO BARBER CO. — Lógica principal del sitio
   No es necesario editar este archivo para personalizar
   contenido: usa js/config.js para eso.
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LIBRERÍA AOS (animaciones al hacer scroll) ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  /* ---------- PRELOADER ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader && preloader.classList.add('is-hidden'), 350);
  });

  /* ---------- BARRA DE PROGRESO + HEADER AL HACER SCROLL ---------- */
  const header = document.getElementById('header');
  const progressBar = document.getElementById('scrollProgress');
  const toTopBtn = document.getElementById('toTop');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';

    if (header) header.classList.toggle('is-scrolled', scrollTop > 40);
    if (toTopBtn) toTopBtn.classList.toggle('is-visible', scrollTop > 500);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTopBtn && toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- MENÚ MÓVIL (hamburguesa) ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    hamburger && hamburger.classList.remove('is-active');
    mobileMenu && mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger && hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ---------- MODAL GENÉRICO (lightbox / bio / confirmación) ---------- */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openModal(html) {
    modalContent.innerHTML = html;
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    // Detiene cualquier video reproduciéndose dentro del modal
    modalContent.innerHTML = '';
  }
  modalClose && modalClose.addEventListener('click', closeModal);
  modalOverlay && modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- GALERÍA: inyectar imágenes + lightbox ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid && window.CONFIG) {
    CONFIG.galeria.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'gallery__item';
      el.setAttribute('data-aos', 'fade-up');
      el.setAttribute('data-aos-delay', String((index % 4) * 80));
      el.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy"
             onerror="this.closest('.gallery__item').style.display='none'">
        <span class="gallery__zoom"><i class="fa-solid fa-expand"></i></span>
        <div class="gallery__caption">${item.caption}</div>
      `;
      el.addEventListener('click', () => {
        openModal(`<img class="modal-lightbox-img" src="${item.src}" alt="${item.caption}">
                   <p style="margin-top:16px;color:var(--ink-muted);text-align:center;">${item.caption}</p>`);
      });
      galleryGrid.appendChild(el);
    });
  }

  /* ---------- EQUIPO: inyectar barberos + modal de biografía ---------- */
  const teamGrid = document.getElementById('teamGrid');
  const barberoSelect = document.getElementById('barberoSelect');

  if (teamGrid && window.CONFIG) {
    CONFIG.barberos.forEach((b, index) => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', String(index * 100));
      card.innerHTML = `
        <div class="team-card__photo">
          <img src="${b.foto}" alt="${b.nombre}" loading="lazy"
               onerror="this.src='https://placehold.co/400x460/201f23/c8973f?text=${encodeURIComponent(b.nombre)}'">
          <div class="team-card__socials">
            <a href="${b.instagram}" aria-label="Instagram" onclick="event.stopPropagation()"><i class="fa-brands fa-instagram"></i></a>
            <a href="${b.facebook}" aria-label="Facebook" onclick="event.stopPropagation()"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
        <div class="team-card__body">
          <h3 class="team-card__name">${b.nombre}</h3>
          <span class="team-card__role">${b.rol}</span>
          <p class="team-card__bio">${b.bio.slice(0, 80)}${b.bio.length > 80 ? '…' : ''}</p>
        </div>
      `;
      card.addEventListener('click', () => {
        openModal(`
          <div class="bio-modal">
            <img src="${b.foto}" alt="${b.nombre}" onerror="this.src='https://placehold.co/360x360/201f23/c8973f?text=${encodeURIComponent(b.nombre)}'">
            <div>
              <h3>${b.nombre}</h3>
              <span class="role">${b.rol}</span>
              <p>${b.bio}</p>
              <div class="socials">
                <a href="${b.instagram}"><i class="fa-brands fa-instagram"></i></a>
                <a href="${b.facebook}"><i class="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        `);
      });
      teamGrid.appendChild(card);

      if (barberoSelect) {
        const opt = document.createElement('option');
        opt.textContent = b.nombre;
        barberoSelect.appendChild(opt);
      }
    });
  }

  /* ---------- VIDEOS: inyectar tarjetas + reproducir en modal ---------- */
  const videosGrid = document.getElementById('videosGrid');
  if (videosGrid && window.CONFIG) {
    CONFIG.videos.forEach((v, index) => {
      const thumb = v.miniatura && v.miniatura.trim() !== ''
        ? v.miniatura
        : `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;

      const card = document.createElement('div');
      card.className = 'video-card';
      card.setAttribute('data-aos', 'zoom-in');
      card.setAttribute('data-aos-delay', String(index * 100));
      card.innerHTML = `
        <img src="${thumb}" alt="${v.titulo}" loading="lazy">
        <div class="video-card__overlay">
          <div class="video-card__play"><i class="fa-solid fa-play"></i></div>
        </div>
        <div class="video-card__title">${v.titulo}</div>
      `;
      card.addEventListener('click', () => {
        openModal(`
          <iframe class="modal-video-frame"
            src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtubeId)}?autoplay=1&rel=0"
            title="${v.titulo}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <p style="margin-top:16px;color:var(--ink-muted);text-align:center;">${v.titulo}</p>
          <p style="text-align:center;"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(v.youtubeId)}" target="_blank" rel="noopener">Ver este video en YouTube ↗</a></p>
        `);
      });
      videosGrid.appendChild(card);
    });
  }

  /* ---------- OPINIONES: inyectar tarjetas ---------- */
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (reviewsGrid && window.CONFIG) {
    CONFIG.opiniones.forEach((r) => {
      const initials = r.nombre.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="review-card__stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <p class="review-card__text">"${r.texto}"</p>
        <div class="review-card__author">
          <div class="review-card__avatar">${initials}</div>
          <div>
            <div class="review-card__name">${r.nombre}</div>
            <div class="review-card__role">${r.rol}</div>
          </div>
        </div>
      `;
      reviewsGrid.appendChild(card);
    });
  }

  /* ---------- TESTIMONIO DESTACADO: carrusel simple junto a precios ---------- */
  const testimonialText = document.getElementById('testimonialText');
  const testimonialAuthor = document.getElementById('testimonialAuthor');
  const testimonialDots = document.getElementById('testimonialDots');

  if (testimonialText && window.CONFIG && CONFIG.testimonioDestacado.length) {
    const items = CONFIG.testimonioDestacado;
    let current = 0;

    function renderTestimonial(i) {
      testimonialText.style.opacity = 0;
      setTimeout(() => {
        testimonialText.textContent = `"${items[i].texto}"`;
        testimonialAuthor.textContent = `— ${items[i].autor}`;
        testimonialText.style.opacity = 1;
      }, 200);

      if (testimonialDots) {
        [...testimonialDots.children].forEach((dot, idx) => dot.classList.toggle('is-active', idx === i));
      }
    }

    testimonialDots.innerHTML = '';
    items.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => { current = i; renderTestimonial(current); resetAutoplay(); });
      testimonialDots.appendChild(dot);
    });

    renderTestimonial(current);

    let autoplayTimer;
    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        current = (current + 1) % items.length;
        renderTestimonial(current);
      }, 5500);
    }
    resetAutoplay();
  }

  /* ---------- CONTADORES ANIMADOS (stats) ---------- */
  const statNums = document.querySelectorAll('.stat__num');
  if (statNums.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString('es-CO');
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('es-CO');
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });

    statNums.forEach(el => observer.observe(el));
  }

  /* ---------- WIDGET FLOTANTE DE WHATSAPP ---------- */
  const whatsappFab = document.getElementById('whatsappFab');
  const whatsappChat = document.getElementById('whatsappChat');
  const closeWhatsappChat = document.getElementById('closeWhatsappChat');
  const whatsappSendBtn = document.getElementById('whatsappSendBtn');

  if (whatsappSendBtn && window.CONFIG) {
    const numero = CONFIG.whatsapp.numero;
    const mensaje = encodeURIComponent(CONFIG.whatsapp.mensajeWidget);
    whatsappSendBtn.href = `https://wa.me/${numero}?text=${mensaje}`;
  }

  whatsappFab && whatsappFab.addEventListener('click', () => {
    whatsappChat.classList.toggle('is-open');
  });
  closeWhatsappChat && closeWhatsappChat.addEventListener('click', () => {
    whatsappChat.classList.remove('is-open');
  });

  /* ---------- FORMULARIO DE RESERVA -> abre WhatsApp con los datos ---------- */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const nombre = data.get('nombre');
      const telefono = data.get('telefono');
      const servicio = data.get('servicio');
      const barbero = data.get('barbero');
      const fecha = data.get('fecha');
      const hora = data.get('hora');
      const mensaje = data.get('mensaje');

      const texto =
        `Hola, quiero reservar una cita en Acero Barber Co. 💈%0A%0A` +
        `*Nombre:* ${nombre}%0A` +
        `*Teléfono:* ${telefono}%0A` +
        `*Servicio:* ${servicio}%0A` +
        `*Barbero:* ${barbero}%0A` +
        `*Fecha:* ${fecha}%0A` +
        `*Hora:* ${hora}` +
        (mensaje ? `%0A*Mensaje:* ${mensaje}` : '');

      const numero = (window.CONFIG && CONFIG.whatsapp.numero) || '';
      const url = `https://wa.me/${numero}?text=${texto}`;

      openModal(`
        <div class="confirm-modal">
          <i class="fa-solid fa-circle-check"></i>
          <h3>¡Solicitud lista!</h3>
          <p>Tu cita para el <strong>${fecha || 'la fecha seleccionada'}</strong> a las
          <strong>${hora || 'la hora seleccionada'}</strong> está lista para enviarse.
          Confírmala por WhatsApp y te responderemos lo antes posible.</p>
          <a href="${url}" target="_blank" class="btn btn--gold">
            <i class="fa-brands fa-whatsapp"></i> Abrir WhatsApp
          </a>
        </div>
      `);

      bookingForm.reset();
    });
  }

  /* ---------- AÑO DINÁMICO EN EL FOOTER ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- CIERRE DE MENÚ MÓVIL AL CRECER LA VENTANA ---------- */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMobileMenu();
  });

});
