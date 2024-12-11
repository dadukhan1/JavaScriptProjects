const hexButton = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorGeneratorBackground = document.querySelector(
  ".hex-color-generator"
);

hexButton.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorCode = "";

  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColorCode += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }

  hexColorValue.textContent = `${hexColorCode}`;
  hexColorGeneratorBackground.style.backgroundColor = `#${hexColorCode}`;

  console.log("The code is : ", hexColorCode);
});
