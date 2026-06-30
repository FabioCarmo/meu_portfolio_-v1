
import {buscarProjetosGithub} from './api.js';

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

// Buscar projetos pela API do Github
document.addEventListener('DOMContentLoaded', () => {
    const btnProjetos = document.querySelector(".btn");

    btnProjetos.addEventListener('click', async () => {
        const projetos = await buscarProjetosGithub("FabioCarmo");
        const container = document.querySelector(".card-projetos");
        container.innerHTML = "";

        // Array de gradientes profissionais para o cabeçalho
    const gradientes = [
        'linear-gradient(135deg, #0073b1 0%, #00a0dc 100%)', // Azul LinkedIn
        'linear-gradient(135deg, #6f42c1 0%, #a461d8 100%)', // Roxo moderno
        'linear-gradient(135deg, #28a745 0%, #5cdb6d 100%)', // Verde Sucesso
    ];

        // Adicionar elementos a seção com os cards do projetos
        projetos.forEach((projeto, index) => {
        const gradienteHeader = gradientes[index % gradientes.length];
        
        // Formata as linguagens (pega a principal ou 'Geral')
        const linguagem = projeto.language ? projeto.language : 'Geral';

            container.innerHTML += 
                `<div class="visualizar-projetos">
                <div class="card-header" style="background: ${gradienteHeader};">
                    <h3>${projeto.name}</h3>
                </div>
                
                <div class="card-body">
                    <p class="projeto-descricao">${projeto.description || 'Sem descrição disponível no momento.'}</p>
                    <div class="projeto-footer">
                        <div class="tags-projeto">
                            <span>${linguagem}</span>
                        </div>
                        <a href="${projeto.html_url}" target="_blank" class="btn-repo">Ver Repositório</a>
                    </div>
                </div>
            </div>`;
        });
    });
});

// Acessar elementos no DOM
const btnMsg = document.querySelector(".btnMsg");
const inputNome = document.querySelector(".inputNome");
const inputMsg = document.querySelector(".inputMsg");
const inputEmail = document.querySelector(".inputEmail");
const areaForm = document.querySelector(".contato");

btnMsg.addEventListener('click', () => {
    console.log("clickou");
    areaForm.classList.toggle('mostrar');
    
    if (areaForm.classList.contains('mostrar')) {
        btnMsg.textContent = 'Cancelar';
    } else {
        btnMsg.textContent = 'Mensagem';
    }
});

areaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = inputNome.value;
    const email = inputEmail.value;
    const txt = inputMsg.value;
    console.log(nome + " " + email + " " + txt);

    areaForm.reset();
})
