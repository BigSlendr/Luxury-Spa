(function () {
  const navToggle = document.getElementById('menuBtn') || document.querySelector('[data-nav-toggle]');
  const navMenu = document.getElementById('nav') || document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath === href) link.classList.add('active');
  });

  const pills = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.result-card');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      const filter = pill.dataset.filter;
      pills.forEach(function (el) { el.classList.remove('active'); });
      pill.classList.add('active');
      cards.forEach(function (card) {
        card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
      });
    });
  });

  const modal = document.querySelector('[data-modal]');
  const modalImg = document.querySelector('[data-modal-image]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalClose = document.querySelectorAll('[data-modal-close]');

  if (modal && modalImg && modalTitle) {
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        const image = card.querySelector('img');
        modalImg.src = image.src;
        modalImg.alt = image.alt;
        modalTitle.textContent = card.dataset.title || image.alt;
        modal.classList.add('open');
      });
    });
    modalClose.forEach(function (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
      });
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const button = item.querySelector('.faq-q') || item;
    button.addEventListener('click', function () {
      item.classList.toggle('open');
      item.classList.toggle('active');
    });
  });

  const form = document.getElementById('contactForm') || document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let valid = true;

      const fields = [
        { name: 'name', test: function (v) { return v.trim().length >= 2; }, msg: 'Please enter your full name.' },
        { name: 'email', test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, msg: 'Enter a valid email address.' },
        { name: 'phone', test: function (v) { return v.replace(/\D/g, '').length >= 10; }, msg: 'Enter a valid phone number.' },
        { name: 'interest', test: function (v) { return v.trim().length > 0; }, msg: 'Please select a treatment interest.' }
      ];

      fields.forEach(function (field) {
        const input = form.querySelector('[name="' + field.name + '"]');
        const error = form.querySelector('[data-error="' + field.name + '"]');
        const passes = field.test(input.value);

        input.classList.toggle('input-error', !passes);
        error.textContent = passes ? '' : field.msg;
        if (!passes) valid = false;
      });

      if (valid) {
        form.reset();
        const success = document.querySelector('[data-form-success]');
        success.style.display = 'block';
      }
    });
  }
})();
