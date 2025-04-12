
/*************************Mardar WhatsApp***********************************/
function sendWhatsApp() {
    console.log("entrou")
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const nome_empresa = document.getElementById('nome_empresa').value;
    const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554499907886&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
}
/*************************Mardar WhatsApp***********************************/




/*************************Mardar email***********************************/

function sendEmail() {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const nome_empresa = document.getElementById('nome_empresa').value;
    console.log(nome_empresa);
    const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
    console.log(mensagem);
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
            alert('Mensagem enviada! Resposta: ' + data);
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar a mensagem: ' + error.message);
        });

}
/*************************Mardar email***********************************/


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


