const hexButton = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorGeneratorBackground = document.querySelector(
  ".hex-color-generator"
);
const hexCopyButton = document.querySelector(".hex-copy-button");

hexButton.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorCode = "";

  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColorCode += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorCode}`;
  hexColorGeneratorBackground.style.backgroundColor = `#${hexColorCode}`;
});

const rgbButton = document.querySelector(".rgb-button");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbBackground = document.querySelector(".rgb-color-generator");
const rgbCopyColor = document.querySelector(".rgb-copy-button");
let rgbValueCopy = "";

rgbButton.addEventListener("click", () => {
  let exactRedValue = getRedInputRange.value;
  let exactGreenValue = getGreenInputRange.value;
  let exactBlueValue = getBlueInputRange.value;

  rgbBackground.style.backgroundColor = `rgb(${exactRedValue},${exactGreenValue},${exactBlueValue})`;
  rgbValueCopy = rgbBackground;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
}

hexCopyButton.addEventListener("click", copyHexColorToClipBoard);

function copyRGBColorToClipBoard() {
  console.log(rgbValueCopy, "34567");

  navigator.clipboard.writeText(rgbBackground.style.backgroundColor);
}

rgbCopyColor.addEventListener("click", copyRGBColorToClipBoard);
