let people = 439;
const p = document.getElementById("aantal-mensen");

document.querySelector("#interresse").addEventListener("click", e => { 
  gsap.fromTo("#interresse", {scale: 1}, {scale: 0.75, duration: 0.25, yoyo: true, repeat: 1, overwrite: true});

function interesse() {
  people++
  p.innerHTML = `Geïnteresseerde mensen: ${people}`;
}
