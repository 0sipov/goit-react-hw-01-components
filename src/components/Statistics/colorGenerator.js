function getRandomColor() {
  const letters = '0123456789';
  let color = '#';
  for (let i = 0; i < 6; i = i + 1) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}
export default getRandomColor;
