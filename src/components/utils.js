export function changeColor(color, backgroundColor) {
  localStorage.setItem('backgroundColor', color);
  document.body.style.backgroundColor = backgroundColor || color;
}

export function loadBackgroundColor() {
  const backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
  }
}
