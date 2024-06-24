AOS.init();
var testimonials = [
    { stars: 5, text: "O Raone é simplesmente um profissional incrível. Completamente dedicado, comprometido, focado com o bem estar e com a qualidade de vida de seus pacientes. Um profissional versátil, além da quiropraxia, ele também nos trata com acupuntura, exercícios terapêuticos, massagem. Tenho fibromialgia, ou seja sofro de dor crônica. E trato com o Raone há alguns anos. E de verdade, saio de lá leve, as vezes tenho impressão que o Raone vem com as mãos de fada e tira minhas dores. Eu indico de olhos fechados o Raone, para qualquer pessoa que sofra de algum desconforto. Confio plenamente nesse super profissional, que sabe o que faz e não poupa esforços para que vc saia de sua clínica completamente sem nenhuma dor.", name: "Carla Noronha" },
    { stars: 5, text: "Excelente!! Profissional eficiente, interessado na pessoa como um todo. Quando nos primeiros atendimentos, achei que estava precisando era de cirurgia, por causa de tantas dores que sentia na lombar e nos joelhos. Já havia feito vários tratamentos, sem melhora a longo prazo. Hoje estou muito bem. Recomendo a todos, conhecidos ou não, que sei que estão com dores e, todos foram bem atendidos e obtiveram resultados ótimos. Quiropraxia, acupuntura, e outros recursos maravilhosos que este profissional lança mão para tratar seus clientes/pacientes. Obrigada Raone Botelho por seu profissionalismo e dedicação.", name: "Edna Abranches" },
    { stars: 5, text: "Experiência Maravilhosa! Tinha uma dor crônica que já estava desistindo de curar, oriunda de Jiu jitsu! Conheci o Raone por intermédio de um amigo e hoje indico para todos! Minha dor curou!!! Minha mobilidade voltou!!! Consegui corrigir minha postura!!! E hoje tenho uma vida extremamente melhor do que quando iniciei o processo! Agradeço a este profissional!!! E super indico!!!", name: "Glauber Fernandes" },
    { stars: 5, text: "Minha experiência com o Raone foi excelente, tendo muito bom resultado que me tirou de uma crise da coluna lombar. Sou grata a ele pela atenção, disponibilidade, profissionalismo, competência e carinho!", name: "Aparecida Pinto e Netto" }
];
var index = 0;

function showTestimonial(i) {
    index = i;
    if (index >= testimonials.length) {index = 0;}
    if (index < 0) {index = testimonials.length-1;}
    
    const quoteElement = document.getElementById("quote");
    quoteElement.classList.remove("flip-left-animation"); // Remove a classe

    // Use um setTimeout para permitir que o navegador "respire" entre as remoções e adições de classes
    setTimeout(() => {
        var stars = '';
        for (var j = 0; j < testimonials[index].stars; j++) {
            stars += '★';
        }
        quoteElement.innerHTML = '<div class="stars">' + stars + '</div><br/>' + testimonials[index].text + '<br/><b>' + testimonials[index].name + '</b>';
        quoteElement.classList.add("flip-left-animation"); // Adiciona a classe de animação
    }, 20);
}

function changeSlide(n) {
    showTestimonial(index += n);
}

// Adicione esta função para iniciar o intervalo
function startSlideShow() {
    slideInterval = setInterval(function() { changeSlide(1); }, 8000); // Muda o slide a cada 8 segundos
}

// Adicione esta função para parar o intervalo quando o usuário clicar nas setas
function stopSlideShow() {
    clearInterval(slideInterval);
}

showTestimonial(0);
startSlideShow(); // Inicia o slideshow quando a página é carregada

// Seção para lidar com eventos de toque
var touchStartX = 0;
var touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (touchEndX < touchStartX) {
        stopSlideShow(0);
        changeSlide(1);
    }
    if (touchEndX > touchStartX) {
        stopSlideShow(0);
        changeSlide(-1);
    }
}

document.getElementById("quote").addEventListener('touchstart', handleTouchStart, false);
document.getElementById("quote").addEventListener('touchmove', handleTouchMove, false);
document.getElementById("quote").addEventListener('touchend', handleTouchEnd, false);


/**Button Back to the top */
const backToTopButton = document.getElementById('backToTop');
const btnWhatsapp = document.getElementById('btn-whatsapp');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {  // Mostrar o botão após rolar 300px
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
        btnWhatsapp.style.opacity = '1';
        btnWhatsapp.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
        btnWhatsapp.style.opacity = '0';
        btnWhatsapp.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
