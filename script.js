document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const colorPicker = document.getElementById('colorPicker');
  const opacityRange = document.getElementById('opacityRange');

  colorPicker.addEventListener('input', () => {
    overlay.style.backgroundColor = colorPicker.value;
  });

  opacityRange.addEventListener('input', () => {
    overlay.style.opacity = opacityRange.value;
  });
});