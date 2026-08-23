// ==========================================================
// 1. LÓGICA DO CARROSSEL DE IMAGENS
// ==========================================================
let indiceSlideAtual = 0;
const slides = document.querySelectorAll('.slide');

// Função principal para mostrar o slide correto
function mostrarSlide(indice) {
    // Esconde todos os slides removendo a classe 'ativo'
    slides.forEach(slide => slide.classList.remove('ativo'));

    // Verifica se o índice passou dos limites e faz o "loop"
    if (indice >= slides.length) {
        indiceSlideAtual = 0; // Volta para a primeira imagem
    } else if (indice < 0) {
        indiceSlideAtual = slides.length - 1; // Vai para a última imagem
    } else {
        indiceSlideAtual = indice;
    }

    // Mostra o slide atual adicionando a classe 'ativo'
    slides[indiceSlideAtual].classList.add('ativo');
}

// Função chamada pelos botões (onclick="mudarSlide(1)" ou onclick="mudarSlide(-1)")
window.mudarSlide = function(direcao) {
    mostrarSlide(indiceSlideAtual + direcao);
};

// Opcional: Faz o carrossel rodar automaticamente a cada 5 segundos
setInterval(() => {
    mudarSlide(1);
}, 5000);


// ==========================================================
// 2. LÓGICA DO FORMULÁRIO DE AGENDAMENTO
// ==========================================================
const formAgendamento = document.getElementById('form-agendamento');

formAgendamento.addEventListener('submit', function(event) {
    // Evita o comportamento padrão de recarregar a página ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // Formata a data de YYYY-MM-DD (padrão do input) para DD/MM/YYYY
    const dataFormatada = data.split('-').reverse().join('/');

    // Formata o nome do serviço para ficar mais bonito na mensagem
    let nomeServico = "";
    if (servico === "corte") nomeServico = "Corte e Penteado";
    else if (servico === "estetica") nomeServico = "Estética Facial";
    else nomeServico = "Outro Serviço";

    // Cria a mensagem codificada para enviar via link do WhatsApp
    const mensagem = `Olá! Gostaria de agendar um horário.%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Serviço:* ${nomeServico}%0A*Data:* ${dataFormatada}%0A*Horário:* ${horario}`;

    // Coloque aqui o número do WhatsApp do seu negócio (apenas números, com código do país e DDD)
    const numeroWhatsApp = "5567993087526"; // Exemplo: 5511999999999

    // Monta o link final do WhatsApp
    const urlWhatsApp = `https://wa.me/${67993087526}?text=${mensagem}`;

    // Mostra uma mensagem na tela para o usuário
    alert(`Obrigado, ${nome}! Você será redirecionado para o nosso WhatsApp para confirmar o agendamento.`);

    // Abre o WhatsApp em uma nova aba com a mensagem preenchida
    window.open(urlWhatsApp, '_blank');

    // Limpa os campos do formulário para o próximo uso
    formAgendamento.reset();
});