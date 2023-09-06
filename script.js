
const button = document.getElementById("order");
const button1 = document.getElementById("target1");
const button2 = document.getElementById("target2");
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector('nav ul');

button.addEventListener("click", function () {
    window.location.href = "https://api.whatsapp.com/send?phone=6281287373318&text=Hai%20kak,%20saya%20mau%20order%20Milo%20Cheese%20Roll%20dong";
});

button1.addEventListener('click', function () {
    const orderElement = document.getElementById("order");
    if (orderElement) {
        orderElement.scrollIntoView();
    }
});

button2.addEventListener('click', function () {
    const orderElement = document.getElementById("order");
    if (orderElement) {
        orderElement.scrollIntoView();
    }
});

hamburger.addEventListener("click", function () {
    this.classList.toggle("change");
    nav.classList.toggle('slide');
})

