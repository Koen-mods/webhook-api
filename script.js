let people = 439;
const p = document.getElementById("aantal-mensen");
const b = document.getElementById("interresse");
  

function interesse() {
  people++
  p.innerHTML = `Geïnteresseerde mensen: ${people}`;
  b.style.transfrom = "scale(2.0)";
  b.style.transfrom = "scale(1.0)";
}
