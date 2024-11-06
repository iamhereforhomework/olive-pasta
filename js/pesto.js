var v = 110 / 1000;
var element = document.querySelector(".element");
var element_width = element.offsetWidth;
var time = (window.innerWidth - element_width) / v;
element.style.animation = `marquee ${time}ms forwards linear`;
var loopTime = element_width / v + 10;
const marquee = document.querySelector(".marquee");

function newMaquee() {
  time = (window.innerWidth + element_width) * v;
  element.style.animation = `marquee ${time}ms forwards linear`;
  loopTime = element_width / v + 100;
  var clonedElement = element.cloneNode(true);
  marquee.appendChild(clonedElement);
  setTimeout(() => {
    marquee.removeChild(clonedElement);
  }, time + 100);
}
marquee.removeChild(element); //第一個先移除，避免卡住
newMaquee(); //手動新增第一個
setInterval(newMaquee, loopTime); //之後自動
