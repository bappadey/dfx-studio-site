window.onload = function () {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').classList.remove('hidden');
  }, 4000);
};

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  // Nav button highlight swap
  ['home', 'service', 'projects', 'clients', 'contact'].forEach(id => {
    const btn = document.getElementById(`nav-${id}`);
    const src = btn.src;
    btn.src = src.replace('_1.png', '_0.png');
  });
  const activeBtn = document.getElementById(`nav-${sectionId}`);
  activeBtn.src = activeBtn.src.replace('_0.png', '_1.png');
}

// Video Popup
function openVideo(url) {
  const iframe = document.getElementById("popup-video");
  iframe.src = url + "?autoplay=1";
  document.getElementById("video-popup").style.display = "flex";
}
function closeVideo() {
  document.getElementById("popup-video").src = "";
  document.getElementById("video-popup").style.display = "none";
}

// Load client logos
window.addEventListener("DOMContentLoaded", () => {
  const clientDiv = document.getElementById("client-logos");
  fetch('Clients/')
    .then(res => res.text())
    .then(data => {
      const files = [...data.matchAll(/href="(.*?\.png)"/g)].map(m => m[1]);
      files.forEach(file => {
        const img = document.createElement("img");
        img.src = "Clients/" + file;
        clientDiv.appendChild(img);
      });
    });
});
