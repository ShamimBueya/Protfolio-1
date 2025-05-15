const modeToggle = document.getElementById('modeToggle');
let darkMode = false;

modeToggle.addEventListener('click', () => {
  if (!darkMode) {
    document.body.classList.remove('bg-light', 'text-dark');
    document.body.classList.add('bg-dark', 'text-light');
    modeToggle.classList.remove('btn-outline-dark');
    modeToggle.classList.add('btn-outline-dark');
    modeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> ';
  } else {
    document.body.classList.remove('bg-dark', 'text-light');
    document.body.classList.add('bg-light', 'text-dark');
    modeToggle.classList.remove('btn-outline-light');
    modeToggle.classList.add('btn-outline-dark');
    modeToggle.innerHTML = '<i class="bi bi-moon-fill"></i> ';
  }
  darkMode = !darkMode;
});
