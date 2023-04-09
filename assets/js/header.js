// hamburger menu

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");

}))


// HEADER (para q aparezca el logo cuando se scrollea pasando la 1era section)

window.addEventListener("scroll", function() {
  const firstSection = document.getElementById("firstSection");
  const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
  const header = document.querySelector("header");

  if (firstSectionBottom < header.offsetHeight) {
    header.querySelector("#logoBlue").classList.add("show-logo");
  } else {
    header.querySelector("#logoBlue").classList.remove("show-logo");
  }
});

// scrollIntoView pantalla > 1024px

document.querySelector('#quienesS').addEventListener('click', () => {
  document.querySelector('#quienesSomos').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#nuestrosServicios').addEventListener('click', () => {
  document.querySelector('#servicios').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#logoHorizontal').addEventListener('click', () => {
  document.querySelector('#firstSection').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#ventaDeInsumos').addEventListener('click', () => {
  document.querySelector('#insumos').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#Contactox').addEventListener('click', () => {
  document.querySelector('#contacto').scrollIntoView({behavior:'smooth', block:'start'})
} )

// scrollIntoView pantalla < 1024px

document.querySelector('#quien').addEventListener('click', () => {
  document.querySelector('#quienesSomos').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#ns').addEventListener('click', () => {
  document.querySelector('#servicios').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#vdi').addEventListener('click', () => {
  document.querySelector('#insumos').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#ctct').addEventListener('click', () => {
  document.querySelector('#contacto').scrollIntoView({behavior:'smooth', block:'start'})
} )
