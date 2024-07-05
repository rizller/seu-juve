AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            } 
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// Carregar header e footer
document.getElementById("header-placeholder").setAttribute("include-html", "header.html");
document.getElementById("footer-placeholder").setAttribute("include-html", "footer.html");
includeHTML();


var testimonials = [
    { 
        stars: 5, 
        image: "assets/testimonial-juliana.png", 
        text: "O aplicativo Seu Juve salvou meu dia! Precisava de um encanador urgentemente e em poucos minutos encontrei um profissional qualificado. Ele resolveu o problema rapidamente e o preço foi justo. Estou muito satisfeita com o serviço e recomendo a todos que precisam de ajuda em casa. Antes do Seu Juve, sempre tinha dificuldades em encontrar bons profissionais e perdia muito tempo ligando para vários lugares. Agora, tudo ficou mais fácil e rápido. A praticidade que o aplicativo oferece é incomparável e a qualidade dos profissionais cadastrados é excelente. Vou continuar usando e recomendando!", 
        name: "Juliana Costa" 
    },
    { 
        stars: 5, 
        image: "assets/testimonial-pedro.png", 
        text: "Meu tempo é muito corrido e encontrar um eletricista de confiança sempre foi um desafio. Com o Seu Juve, consegui agendar um eletricista para consertar a fiação da minha casa em poucos minutos. O profissional foi super eficiente e educado. Não sei o que faria sem esse aplicativo! Além disso, a interface do aplicativo é muito intuitiva, facilitando o agendamento de serviços. Já utilizei o Seu Juve diversas vezes para diferentes tipos de serviços e sempre fui muito bem atendido. É um verdadeiro alívio saber que posso contar com profissionais competentes a qualquer hora do dia.", 
        name: "Pedro Lima" 
    },
    { 
        stars: 5, 
        image: "assets/testimonial-mariana.png", 
        text: "O Seu Juve realmente mudou minha vida! Eu precisava de alguém para fazer pequenos reparos em casa e sempre tinha dificuldade de encontrar alguém disponível. Agora, com o app, posso chamar um faz-tudo a qualquer hora e sempre sou atendida rapidamente. Recomendo muito! Os profissionais são sempre pontuais e realizam os serviços com muita qualidade. Já utilizei o aplicativo para serviços de encanamento, eletricidade e até mesmo para pequenos consertos. Não sei o que faria sem o Seu Juve. Ele trouxe muita tranquilidade e praticidade para o meu dia a dia.", 
        name: "Mariana Silva" 
    },
    { 
        stars: 5, 
        image: "assets/testimonial-carlos.png", 
        text: "Minha experiência com o Seu Juve foi incrível. Tive um problema sério com o encanamento e o aplicativo me conectou com um profissional excelente em questão de minutos. Ele chegou rápido e resolveu tudo com eficiência. Esse app realmente salva o dia a dia das pessoas! Além disso, o atendimento ao cliente é excelente, sempre prontos para ajudar em qualquer situação. Antes, era um transtorno encontrar alguém disponível e confiável para serviços de urgência, mas agora, com o Seu Juve, sei que posso contar com ajuda de qualidade a qualquer momento. É realmente um aplicativo indispensável.", 
        name: "Carlos Mendes" 
    },
    { 
        stars: 5, 
        image: "assets/testimonial-ana.png", 
        text: "Estou muito feliz com o aplicativo Seu Juve. Precisava de um eletricista e em poucos cliques encontrei um profissional disponível. Ele veio rápido e resolveu todos os meus problemas elétricos. Esse app é uma verdadeira mão na roda e já faz parte da minha vida! A qualidade dos serviços prestados é sempre alta e os profissionais são muito educados e prestativos. Já usei o Seu Juve para diferentes tipos de serviços e nunca me decepcionei. É um verdadeiro alívio saber que posso resolver qualquer problema doméstico com apenas alguns cliques. Recomendo para todos!", 
        name: "Ana Oliveira" 
    }
];

var index = 0;

function showTestimonial(i) {
    index = i;
    if (index >= testimonials.length) { index = 0; }
    if (index < 0) { index = testimonials.length - 1; }

    const quoteElement = document.getElementById("quote");
    quoteElement.classList.remove("flip-left-animation");

    setTimeout(() => {
        var stars = '';
        for (var j = 0; j < testimonials[index].stars; j++) {
            stars += '★';
        }
        quoteElement.innerHTML = `
            <div class="testimonial-content">
                <img src="${testimonials[index].image}" alt="Testimonial Image">
                <div class="testimonial-details">
                    <div class="testimonial-name">${testimonials[index].name}</div>
                    <div class="stars">${stars}</div>
                </div>
            </div>
            <p>${testimonials[index].text}</p>
        `;
        quoteElement.classList.add("flip-left-animation");
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

function showMapSection() {
    var mapSection = document.getElementById("map-section");
    mapSection.style.display = "block";
    mapSection.classList.add("aos-animate");
    AOS.refreshHard();
}


function showModal(event, modalId) {
    event.preventDefault();
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}