// from Pixabay, Unsplash
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg",
  "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg", "pic9.jpg",
  "pic10.jpg", "pic11.jpg", "pic12.jpg", "pic13.jpg", "pic14.jpg",
  "pic15.jpg", "pic16.jpg", "pic17.jpg", "pic18.jpg", "pic19.jpg",
  "pic20.jpg", "pic21.jpg"];

const chosenImage =images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 이미지 생성

bgImage.src = `img/${chosenImage}`;

document.getElementById('imgupload').appendChild(bgImage);