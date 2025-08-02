
window.onload = function () {
  const sections = document.querySelectorAll('.section');
  const buttons = {
    home: document.getElementById('btn-home'),
    service: document.getElementById('btn-service'),
    projects: document.getElementById('btn-projects'),
    clients: document.getElementById('btn-clients'),
    contact: document.getElementById('btn-contact')
  };

  function showSection(id) {
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    for (const key in buttons) {
      const img = buttons[key];
      img.src = img.src.replace('_1.png', '_0.png');
    }
    buttons[id].src = buttons[id].src.replace('_0.png', '_1.png');
  }

  for (const id in buttons) {
    buttons[id].addEventListener('click', () => showSection(id));
  }

  // Hide intro after 4s
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    showSection('home');
  }, 4000);

  // Load client logos dynamically
  fetch('Clients/')
    .then(res => res.text())
    .then(html => {
      const div = document.createElement('div');
      div.innerHTML = html;
      const logos = [...div.querySelectorAll('a')]
        .map(a => a.href)
        .filter(href => href.match(/\.(png|jpg|jpeg)$/i));
      const container = document.getElementById('client-logos');
      logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        container.appendChild(img);
      });
    });

  // Example slideshow images & text
  const serviceImages = ['Servic/ser-image.jpg'];
  const texts = ['Professional Editing', 'Color Grading', 'Sound Design'];
  let slideIndex = 0;
  const slideshow = document.getElementById('service-slideshow');
  function showSlide() {
    slideshow.innerHTML = `
      <img src="${serviceImages[slideIndex % serviceImages.length]}" />
      <div class="slideshow-text">${texts[slideIndex % texts.length]}</div>
    `;
    slideIndex++;
    setTimeout(showSlide, 3000);
  }
  showSlide();
};
