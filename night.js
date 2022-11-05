function nightHandler() {
  document.querySelector('body').style.backgroundImage = "url('night.jpg')";
  document.querySelector('body').style.backgroundRepeat = "no-repeat";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('body').style.backgroundPosition = "100% 100%";
  document.getElementById('clock').style.color = '#9FE2BF';
  document.getElementById('photo').style.background = "linear-gradient(0.25turn, #9FBFA5, black)";
  document.getElementById('quote').style.color = '#FBE0F1';
  document.getElementById('weather').style.color = '#E9EDE3';
}

function dayHandler() {
  document.querySelector('body').style.backgroundImage = "url('flower.png')";
  document.querySelector('body').style.backgroundRepeat = "no-repeat";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('body').style.backgroundPosition = "100% 100%";
  document.getElementById('clock').style.color = 'rgb(040, 075, 029)';
  document.getElementById('photo').style.background = "whitesmoke";
  document.getElementById('quote').style.color = '#EE6983';
  document.getElementById('weather').style.color = 'rgb(070, 074, 056)';
}

