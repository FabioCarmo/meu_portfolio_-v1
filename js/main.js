// Rolagem Suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Acessar elementos no DOM
const btnMsg = document.querySelector(".btnMsg");
const inputNome = document.querySelector(".inputNome");
const inputMsg = document.querySelector(".inputMsg");
const areaForm = document.querySelector(".contato");

btnMsg.addEventListener('click', () => {
    console.log("clickou");
    areaForm.classList.toggle('escondido');

    if (areaForm.classList.contains('escondido')) {
        btnMsg.textContent = 'Mensagem';
    } else {
        btnMsg.textContent = 'Cancelar Envio';
    }
});

areaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = inputNome.value;
    console.log(nome)

    areaForm.reset();
})
