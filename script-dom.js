// Init AOS
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Exemple de manipulation DOM simple (changer couleur après 2s)
  setTimeout(() => {
    const demo = document.getElementById("demo");
    demo.style.color = "green";
    demo.innerHTML = "Texte modifié automatiquement après 2 secondes !";
  }, 2000);
  