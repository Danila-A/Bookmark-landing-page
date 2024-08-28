document.addEventListener('DOMContentLoaded', assignActionToQuestion);

function assignActionToQuestion() {
    const questions = document.querySelectorAll('.faq__questionsItem');

    for(let question of questions) {
        question.childNodes[0].addEventListener('click', (e) => {
            const arrow = e.target.closest('.faq__questionsItem').childNodes[1];

            if(e.target.tagName == 'P') return;
            arrow.classList.toggle('arrow_open');
        });
    }
}