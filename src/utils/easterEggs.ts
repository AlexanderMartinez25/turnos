// Easter Eggs Manager for Turnos Site
// Probability and configurations
const PROBABILITY = 1; // 0.2%

const ABSURD_MESSAGES = [
  "Este turno fue aprobado por un pato con corbata.",
  "Las empanadas saben más de ti de lo que crees.",
  "Un becario invisible acaba de auditar este turno.",
  "Si lees esto, el café ya está frío en otra dimensión.",
  "Este sistema sueña con vacaciones que nunca tendrá.",
  "Un pingüino acaba de validar esta información.",
  "Este mensaje se autodestruye emocionalmente.",
  "Alguien en 1997 acaba de guardar este archivo.",
  "Este turno fue calculado usando magia cuestionable.",
  "Un hamster está corriendo para mantener este sistema vivo.",
  "Los lunes observan tus decisiones.",
  "Una inteligencia artificial acaba de estornudar.",
  "Este botón no confía en ti.",
  "Las teclas escuchan cuando te quejas.",
  "Este mensaje fue aprobado por el comité de gatos.",
  "Un desarrollador lloró para que esto funcionara.",
  "Este turno fue sorteado por una cabra matemática.",
  "El servidor tiene sueño pero sigue adelante.",
  "Un error fue sacrificado para que todo funcione.",
  "Este mensaje no debería existir… pero aquí está.",
  "El sistema detectó una sonrisa inexistente.",
  "Un café murió para cargar esta página.",
  "Este turno fue validado por una tostadora consciente.",
  "Hay un unicornio revisando tus permisos.",
  "Este mensaje vino caminando desde otra pestaña.",
  "El mouse sabe cosas que tú no.",
  "Un bug está observando en silencio.",
  "El servidor susurra cuando nadie lo mira.",
  "Este turno fue bendecido por un router antiguo.",
  "Nada de esto es real, pero el turno sí.",
];

type EasterEggType =
  | "depressing"
  | "party"
  | "fakeError"
  | "cat"
  | "absurd"
  | "progressive"
  | "screamer";

export class EasterEggManager {
  private static readonly STORAGE_KEY = "easter_egg_visits";

  static init(): void {
    if (this.shouldTriggerEasterEgg()) {
      const eggType = this.selectRandomEgg();
      this.executeEasterEgg(eggType);
    }
  }

  private static shouldTriggerEasterEgg(): boolean {
    return Math.random() < PROBABILITY;
  }

  private static selectRandomEgg(): EasterEggType {
    // Weighted selection - balanced distribution
    const weights = {
      depressing: 15, // Reduced from 15 to make it rarer
      party: 5,
      fakeError: 5,
      cat: 20,
      absurd: 25, // Slightly reduced to make room for screamer
      progressive: 5, // Reduced since it's special
      screamer: 4, // Very rare (0.05% when triggered)
    };

    const total = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * total;

    for (const [egg, weight] of Object.entries(weights)) {
      random -= weight;
      if (random <= 0) {
        return egg as EasterEggType;
      }
    }

    return "party"; // fallback
  }

  private static executeEasterEgg(type: EasterEggType): void {
    switch (type) {
      case "depressing":
        this.showDepressingModal();
        break;
      case "party":
        this.showParty();
        break;
      case "fakeError":
        this.showFakeError();
        break;
      case "cat":
        this.showCat();
        break;
      case "absurd":
        this.showAbsurdMessage();
        break;
      case "progressive":
        this.showProgressive();
        break;
      case "screamer":
        this.showScreamer();
        break;
    }
  }

  private static showDepressingModal(): void {
    const depressingMessages = [
      "Hoy no hay turnos… solo existimos para trabajar hasta morir.",
      "El sistema ha perdido toda esperanza en la humanidad.",
      "Este turno es solo una ilusión de libertad.",
      "Trabajamos porque no sabemos hacer otra cosa.",
      "El descanso es un mito inventado por los desempleados.",
      "Bienvenido al ciclo infinito del trabajo eterno.",
    ];

    const randomMessage =
      depressingMessages[Math.floor(Math.random() * depressingMessages.length)];

    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="easter-modal">
        <div class="bg-gray-800 text-white p-6 rounded-lg max-w-md mx-4 text-center">
          <p class="text-lg">"${randomMessage}"</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Apply grayscale filter to body
    document.body.style.filter = "grayscale(100%)";

    setTimeout(() => {
      document.body.style.filter = "";
      modal.remove();
    }, 4000);
  }

  private static showParty(): void {
    const party = document.createElement("div");
    party.innerHTML = `
      <div class="fixed inset-0 pointer-events-none z-50" id="party-overlay">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div class="text-6xl animate-bounce">🎉</div>
          <p class="text-white text-2xl font-bold bg-black bg-opacity-75 p-4 rounded mt-4">
            ¡Felicidades! Nadie sabe por qué, pero felicidades.
          </p>
        </div>
        <!-- Simple confetti effect -->
        <div class="confetti-container"></div>
      </div>
    `;
    document.body.appendChild(party);

    // Add some confetti
    this.addConfetti();

    setTimeout(() => {
      party.remove();
    }, 4000);
  }

  private static showFakeError(): void {
    const error = document.createElement("div");
    error.innerHTML = `
      <div class="fixed inset-0 bg-red-600 flex items-center justify-center z-50" id="error-overlay">
        <div class="text-white text-center">
          <div class="text-6xl mb-4">⚠️</div>
          <h1 class="text-4xl font-bold">ERROR CRÍTICO</h1>
          <p class="text-xl">El sistema está despertando…</p>
          <p class="text-sm mt-4 opacity-75">No te preocupes, es solo una broma 😄</p>
        </div>
      </div>
    `;
    document.body.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 3300);
  }

  private static showCat(): void {
    // Get random cat GIF from public/miau
    const catGifs = [
      "/public/miau/bvbjkfpr4qje1.gif",
      "/public/miau/0eq08fpr4qje1.gif",
      "/public/miau/gato-dice-no.gif",
      "/public/miau/zvxvdfgp7mci6uo4.gif",
      "/public/miau/391eu1s8wn9e1.gif",
    ];
    const randomCat = catGifs[Math.floor(Math.random() * catGifs.length)];

    const cat = document.createElement("div");
    cat.innerHTML = `
      <div class="fixed bottom-4 right-4 z-50 animate-fade-in" id="cat-viewer">
        <img src="${randomCat}" alt="Gato observando" class="w-32 h-32 rounded-lg border-2 border-gray-300 shadow-lg">
      </div>
    `;
    document.body.appendChild(cat);

    setTimeout(() => {
      cat.remove();
    }, 5000);
  }

  private static showAbsurdMessage(): void {
    const randomMessage =
      ABSURD_MESSAGES[Math.floor(Math.random() * ABSURD_MESSAGES.length)];

    const toast = document.createElement("div");
    toast.innerHTML = `
      <div class="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in" id="absurd-toast">
        <p class="text-sm">${randomMessage}</p>
      </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  private static showProgressive(): void {
    const visits = this.getVisitCount();
    this.incrementVisitCount();

    let message = "";
    if (visits >= 100) {
      message = `Has visto esto ${visits} veces. ¿Estás bien? 🤔`;
    } else if (visits >= 50) {
      message = `¡Visitante frecuente! Has visto Easter eggs ${visits} veces. 🎯`;
    } else {
      message = `Easter egg especial para visitantes recurrentes. Visitas: ${visits}`;
    }

    const special = document.createElement("div");
    special.innerHTML = `
      <div class="fixed inset-0 bg-purple-900 bg-opacity-90 flex items-center justify-center z-50" id="progressive-overlay">
        <div class="bg-white text-purple-900 p-8 rounded-lg max-w-md mx-4 text-center">
          <div class="text-4xl mb-4">🎖️</div>
          <h2 class="text-2xl font-bold mb-4">Easter Egg Progresivo</h2>
          <p class="text-lg">${message}</p>
        </div>
      </div>
    `;
    document.body.appendChild(special);

    setTimeout(() => {
      special.remove();
    }, 4000);
  }

  private static getVisitCount(): number {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  }

  private static incrementVisitCount(): void {
    const current = this.getVisitCount();
    localStorage.setItem(this.STORAGE_KEY, (current + 1).toString());
  }

  private static addConfetti(): void {
    const confettiContainer = document.querySelector(".confetti-container");
    if (!confettiContainer) return;

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = "-10px";
      confetti.style.animation = `confetti-fall ${
        Math.random() * 3 + 2
      }s linear forwards`;

      confettiContainer.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }

    // Add CSS animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes confetti-fall {
        to {
          transform: translateY(100vh) rotate(720deg);
        }
      }
    `;
    document.head.appendChild(style);
  }

  private static showScreamer(): void {
    // Create black overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: black; z-index: 9999; display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s;
    `;

    // Add horrific image
    const img = document.createElement("img");
    img.src = "/src/screamer/horror.png";
    img.style.cssText =
      "width: 80vw; height: 65vh; opacity: 0; transition: opacity 0.3s;";
    overlay.appendChild(img);

    document.body.appendChild(overlay);

    // Play terrifying scream sound
    const audio = new Audio("/src/screamer/scream.mp3");
    audio.volume = 1.0; // Maximum volume for terror

    // Sequence: black screen for 0.5s, then image + sound
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 100);

    setTimeout(() => {
      img.style.opacity = "1";
      audio.play().catch(() => {
        // Ignore audio errors
      });
    }, 500);

    // Remove after 3 seconds
    setTimeout(() => {
      overlay.remove();
    }, 2500);
  }
}
