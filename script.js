let people = 439;
const p = document.getElementById("aantal-mensen");
const b = document.getElementById("interresse");
  

function interesse() {
  people++;
  p.innerHTML = `Geïnteresseerde mensen: ${people}`;
  b.style.transform = "scale(1.2)";
  b.style.border = 'solid blue 1px'
  setTimeout(() => {
    b.style.transform = "scale(1.0)";
    b.styel.border = "solid #000000 1px";
  }, 150);
}
