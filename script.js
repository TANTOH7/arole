// Ton message d'anniversaire à personnaliser ici
const messageTexte = "Le retard ? C'est de la faute du code, il me fallait du temps pour te construire un jardin sur mesure ! 😉 Plus sérieusement, je remercie le ciel d'avoir béni ta mère. Elle a mis au monde une étoile sublime, venue réincarner la beauté et faire honneur à la femme donc tu es spéciale. 🌹✨";

const garden = document.getElementById('garden');
const countDisplay = document.getElementById('count');
const messageBox = document.getElementById('message-box');
const typewriterText = document.getElementById('typewriter-text');
const girlName = document.getElementById('girl-name');
const music = document.getElementById('bg-music');
const instructions = document.getElementById('instructions');

// Émojis de fleurs
const flowerEmojis = ['🌹', '🌸', '🌺', '🌻', '🌷', '💐', '🌼', '🪷'];

let flowerCount = 0;
const maxFlowers = 10;

garden.addEventListener('click', (e) => {
    // Si la fenêtre est ouverte, on ignore le clic
    if (e.target.closest('#message-box')) return;
    if (flowerCount >= maxFlowers) return;

    // 1. Fleur au hasard
    const randomFlower = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

    // 2. Créer l'émoji
    const flower = document.createElement('span');
    flower.classList.add('flower');
    flower.innerText = randomFlower;

    // 3. Placer au niveau du clic
    flower.style.left = `${e.clientX}px`;
    flower.style.top = `${e.clientY}px`;

    garden.appendChild(flower);

    // 4. Compteur + 1
    flowerCount++;
    countDisplay.innerText = flowerCount;

    // 5. À la 10ème fleur, surprise !
    if (flowerCount === maxFlowers) {
        showSurprise();
    }
});

function showSurprise() {
    // Masquer l'instruction du bas
    instructions.style.display = 'none';

    // Afficher la boîte de message
    messageBox.classList.remove('hidden');
    setTimeout(() => {
        messageBox.classList.add('show');
        // Démarrer la machine à écrire
        startTypewriter();
    }, 300);

    // Démarrer la musique
    music.play().catch(error => {
        console.log("Lecture automatique bloquée par le navigateur :", error);
    });
}

// Fonction machine à écrire
let index = 0;
function startTypewriter() {
    if (index < messageTexte.length) {
        typewriterText.innerHTML += messageTexte.charAt(index);
        index++;
        setTimeout(startTypewriter, 70); // Vitesse de frappe (40 millisecondes par lettre)
    } else {
        // UNE FOIS LE MESSAGE TERMINÉ : révéler son prénom !
        setTimeout(() => {
            if (girlName) {
                girlName.classList.add('visible');
            }
        }, 7000); // Attend 0.5s après la dernière lettre
    }
}