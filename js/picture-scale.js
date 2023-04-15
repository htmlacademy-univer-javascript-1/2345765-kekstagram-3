const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

smallerButton.addEventListener('click', () => {
  let intPercentValue = parseInt(scaleValue.value, 10);
  if (intPercentValue > 25) {
    intPercentValue -= 25;
    scaleValue.value = `${intPercentValue} %`;
    imgPreview.style.transform = `scale(${intPercentValue / 100})`;
  }
});

biggerButton.addEventListener('click', () => {
  let intPercentValue = parseInt(scaleValue.value, 10);
  if (intPercentValue < 100) {
    intPercentValue += 25;
    scaleValue.value = `${intPercentValue} %`;
    imgPreview.style.transform = `scale(${intPercentValue / 100})`;
  }
});

