const btnChange = document.querySelector("#btn-change");
const spanRgb = document.querySelector("#rgb");
const spanHex = document.querySelector("#hex");

btnChange.addEventListener("click", () => {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();

  const rgbString = `rgb(${red}, ${green}, ${blue})`;
  const hexString = `#${convertNumber(red)}${convertNumber(
    green
  )}${convertNumber(blue)}  `;
  console.log(rgbString);
  console.log(hexString);
  spanRgb.innerText = rgbString;
  spanHex.innerText = hexString;
  document.body.style.backgroundColor = rgbString;
});
function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}
function convertNumber(value) {
  return value.toString(16).padStart(2, "0");
}
