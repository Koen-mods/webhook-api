let people = 439;
const p = document.getElementById("aantal-mensen");
  

function interesse() {
  people++
  p.innerHTML = `Geïnteresseerde mensen: ${people}`;
  p.style.transfrom = scale(1.2);
}
