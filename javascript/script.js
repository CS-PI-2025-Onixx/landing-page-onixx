fetch('json/faq.json')
    .then(resp => resp.json())
    .then(faqs => {
        const faqContainer = document.getElementById('faq-container');

        faqs.forEach(faq => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');

            const pergunta = document.createElement('h4');
            pergunta.textContent = faq.pergunta;
            pergunta.addEventListener('click', () =>{
                faqItem.classList.toggle('active');
            })

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