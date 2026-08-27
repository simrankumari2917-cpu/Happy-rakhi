function openSurprise() {
    document.getElementById("surprise").style.display = "block";
}
setInterval(function() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = "20px";
    heart.style.transition = "transform 5s linear, opacity 5s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function() {
        heart.style.transform = "translateY(100vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(function() {
        heart.remove();
    }, 5000);
}, 700);
function tieRakhi() {
    document.getElementById("virtualRakhi").innerHTML = "🎀";
    document.getElementById("rakhiMessage").innerHTML =
        "✨ Rakhi tied successfully! Happy Raksha Bandhan, Bhai! ❤️";
}