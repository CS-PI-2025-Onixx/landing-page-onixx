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
