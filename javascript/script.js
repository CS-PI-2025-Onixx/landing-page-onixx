// function sendWhatsApp() {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const telefone = document.getElementById('telefone').value;
//     const nome_empresa = document.getElementById('nome_empresa').value;
//     const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=554499907886&text=${encodeURIComponent(mensagem)}`;
//     window.open(whatsappUrl, '_blank');
// }

// function sendEmail() {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const telefone = document.getElementById('telefone').value;
//     const nome_empresa = document.getElementById('nome_empresa').value;
//     const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nNome da empresa: ${nome_empresa}`;
//     const url = `https://onixx-email-service.onrender.com/enviar-mensagem`;
//     try {
//         fetch(url, {
//             method: "post",
//             body: {
//                 "mensagem": mensagem,
//                 "empresa": nome_empresa,
//                 "nome": nome,
//                 "email": email,
//             }
//         }).then(function (response) { console.log(response) })
//     } catch (e) {
//         console.log("texte")
//     } finally {
//         console.log("e")
//     }
// }
