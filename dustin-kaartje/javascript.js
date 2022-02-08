function showSection(section_idx) {
  document.querySelector('.background_overlay').style.display = 'inherit';
  document.querySelectorAll('section')[section_idx].style.animation = 'showSection 0.5s forwards 0s';
}

function hideSection(section_idx) {
  document.querySelector('.background_overlay').style.display = 'none';
  document.querySelectorAll('section')[section_idx].style.animation = 'hideSection 0.5s forwards 0s';
}
