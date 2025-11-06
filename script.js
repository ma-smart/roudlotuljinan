
document.addEventListener('DOMContentLoaded', function(){
  // Dark mode toggle - persists in localStorage
  const toggle = document.getElementById('darkToggle');
  const body = document.body;
  const sunIcon = '<i class="fa-regular fa-sun"></i>';
  const moonIcon = '<i class="fa-regular fa-moon"></i>';

  function applyMode(mode){
    if(mode === 'dark'){
      body.classList.remove('light-mode'); body.classList.add('dark-mode');
      if(toggle) toggle.innerHTML = sunIcon;
    } else {
      body.classList.remove('dark-mode'); body.classList.add('light-mode');
      if(toggle) toggle.innerHTML = moonIcon;
    }
  }

  // Initialize from storage
  const saved = localStorage.getItem('mrj-mode') || 'light';
  applyMode(saved);

  if(toggle){
    toggle.addEventListener('click', function(){
      const next = body.classList.contains('dark-mode') ? 'light' : 'dark';
      localStorage.setItem('mrj-mode', next);
      applyMode(next);
    });
  }

  // Form interaction
  const form = document.getElementById('formPendaftaran');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(msg){
        msg.textContent = 'Terima kasih — formulir telah dikirim (demo).';
        msg.style.color = '#00b050';
      }
      form.reset();
    });
  }

  // Smooth scroll helper
  window.smoothScroll = function(e, selector){
    e.preventDefault();
    const el = document.querySelector(selector);
    if(el) el.scrollIntoView({behavior:'smooth'});
  };
});
