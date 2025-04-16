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