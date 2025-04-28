document.getElementById('btn-contato').addEventListener('click', function () {
    const contato = document.getElementById('contato');
    if (contato) {
        contato.scrollIntoView({ behavior: 'smooth' });
    }
});

/*************************Mandar WhatsApp***********************************/
function sendWhatsApp() {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const nome_empresa = document.getElementById('nome-empresa').value.trim();

    if (!nome || !email || !telefone || !nome_empresa) {
        Swal.fire({
            icon: "warning",
            title: "Atenção",
            text: "Por favor, preencha todos os campos antes de enviar a mensagem."
        });
        return;
    }

    const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554499999999&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
}
/*************************Mandar WhatsApp***********************************/




/*************************Mandar email***********************************/

function sendEmail() {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const nome_empresa = document.getElementById('nome-empresa').value.trim();

    if (!nome || !email || !telefone || !nome_empresa) {
        Swal.fire({
            icon: "warning",
            title: "Atenção",
            text: "Por favor, preencha todos os campos antes de enviar a mensagem."
        });
        return;
    }
    const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
    const url = 'https://onixx-email-service.onrender.com/enviar-mensagem';
    const dados = {
        "mensagem": mensagem,
        "empresa": nome_empresa,
        "telefone": telefone ? telefone : "",
        "nome": nome,
        "email": email
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log('Resposta da API:', data);

            Swal.fire({
                title: "Tudo certo!",
                text: data,
                icon: "success"
            });

        })
        .catch(error => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "algo deu errado! tente novamente mais tarde.",
                //text: error.message,

            });
        });

}
/****************************************************************************/


/*************************mascara telefone***********************************/
document.addEventListener("DOMContentLoaded", function () {
    const campoTelefone = document.getElementById("telefone");

    if (campoTelefone) {
        campoTelefone.addEventListener("input", function (evento) {
            let campo = evento.target;

            let numerosDigitados = campo.value.replace(/\D/g, '');
            let numerosLimitados = numerosDigitados.substring(0, 11);

            let telefoneFormatado = '';

            if (numerosLimitados.length > 0) {
                telefoneFormatado += '(' + numerosLimitados.substring(0, 2);
            }
            if (numerosLimitados.length >= 3) {
                telefoneFormatado += ') ' + numerosLimitados.substring(2, 7);
            }
            if (numerosLimitados.length >= 8) {
                telefoneFormatado += '-' + numerosLimitados.substring(7, 11);
            }

            campo.value = telefoneFormatado;
        });
    }
});
/*************************mascara telefone***********************************/



fetch('json/faq.json')
    .then(resp => resp.json())
    .then(faqs => {
        const faqContainer = document.getElementById('faq-container');

        faqs.forEach(faq => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');

            const pergunta = document.createElement('h4');
            pergunta.textContent = faq.pergunta;

            const icon = document.createElement('i');
            icon.classList.add('ri-arrow-down-s-line');

            pergunta.addEventListener('click', () => {
                faqItem.classList.toggle('active');

                if (faqItem.classList.contains('active')) {
                    icon.classList.remove('ri-arrow-down-s-line');
                    icon.classList.add('ri-arrow-up-s-line');
                } else {
                    icon.classList.remove('ri-arrow-up-s-line');
                    icon.classList.add('ri-arrow-down-s-line');
                }
            });

            pergunta.appendChild(icon);

            const resposta = document.createElement('p');
            resposta.textContent = faq.resposta;

            faqItem.appendChild(pergunta);
            faqItem.appendChild(resposta);
            faqContainer.appendChild(faqItem);
        });
    })
    .catch(e => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
