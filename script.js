
// ELEMENTOS PRINCIPAIS

const welcome = document.getElementById("welcome");
const farm = document.getElementById("farm");
const enterButton = document.getElementById("enterButton");

// ENTRAR NA FAZENDA

enterButton.addEventListener("click", () => {

    welcome.classList.add("hidden");
    farm.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// MENSAGENS DOS ANIMAIS

const animalMessages = {

    cow: {
        emoji: "🐄",
        text: "Essa é nossa primeira vaquinha! Ela vai produzir o leite do nosso café da manhã. Cuida bem dela, sócia!"
    },

    bull: {
        emoji: "🐂",
        text: "Nosso primeiro boi! Futuro patrimônio da família. Já estou imaginando nosso rebanho crescendo KKKKK."
    },

    pig: {
        emoji: "🐷",
        text: "Esse aqui é o responsável pela bagunça. Não pode faltar um porquinho na nossa fazenda!"
    },

    chicken: {
        emoji: "🐔",
        text: "Responsável pelos ovos do café da manhã. Só não vale deixar ela fugir do galinheiro!"
    },

    horse: {
        emoji: "🐎",
        text: "Nosso transporte oficial para passear pela fazenda no fim da tarde."
    },

    sheep: {
        emoji: "🐑",
        text: "Essa ovelhinha vai ficar responsável por deixar nossa fazenda ainda mais fofinha."
    },

    dog: {
        emoji: "🐕",
        text: "O verdadeiro dono da propriedade. Nós vamos pagar as contas e ele vai mandar em tudo."
    }

};

// ELEMENTOS DA MENSAGEM

const animalButtons = document.querySelectorAll(".animal");

const animalEmoji = document.getElementById("animalEmoji");
const animalText = document.getElementById("animalText");

// CLIQUE NOS ANIMAIS

animalButtons.forEach((animal) => {

    animal.addEventListener("click", () => {

        const animalType = animal.dataset.animal;

        const message = animalMessages[animalType];

        animalEmoji.textContent = message.emoji;
        animalText.textContent = message.text;

        // EFEITO VISUAL

        animalEmoji.animate(
            [
                { transform: "scale(0.5) rotate(-15deg)" },
                { transform: "scale(1.3) rotate(10deg)" },
                { transform: "scale(1) rotate(0deg)" }
            ],
            {
                duration: 450,
                easing: "ease-out"
            }
        );

    });

});

// CONTRATO RURAL

const contractButton = document.getElementById("contractButton");

const modal = document.getElementById("modal");

const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");

contractButton.addEventListener("click", () => {

    modalIcon.textContent = "💍";

    modalTitle.textContent = "Contrato assinado!";

    modalText.textContent =
        "Parabéns! Nossa sociedade rural está oficialmente formada. Agora só falta começar a construir nossa casinha, comprar nosso gado e viver essa aventura juntos. ❤️";

    closeModal.textContent = "NOSSA FAZENDA!";

    modal.classList.remove("hidden");

    // CONFETES DE EMOJI

    createConfetti();

});

// FECHAR MODAL

closeModal.addEventListener("click", () => {

    modal.classList.add("hidden");

});

// FECHAR CLICANDO FORA

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.add("hidden");
    }

});

// CONFETES

function createConfetti() {

    const emojis = ["❤️", "🌻", "🐮", "💕", "🌼", "🐄"];

    for (let i = 0; i < 30; i++) {

        const confetti = document.createElement("span");

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confetti.style.zIndex = "100";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 2500 + 2000;

        const animation = confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        animation.onfinish = () => {
            confetti.remove();
        };

    }

}

// MENSAGEM INICIAL

animalEmoji.textContent = "🐮";

animalText.textContent =
    "Bem-vinda à nossa futura fazenda! Clique nos animais para conhecer nossos futuros moradores. ❤️";
