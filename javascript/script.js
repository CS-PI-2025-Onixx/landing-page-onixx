fetch('json/faq.json')
    .then(resp => resp.json())
    .then(faqs => {
        const faqContainer = document.getElementById('faq-container');

        faqs.forEach(faq => {

            //DESENVOLVER AQUI

        });
    })
    .catch(e => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });