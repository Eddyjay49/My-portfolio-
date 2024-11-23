const menuIcon = document.getElementById("menu-icon");
const links = document.querySelector(".links");

menuIcon.onclick = () => {
    links.classList.toggle("active");
};

