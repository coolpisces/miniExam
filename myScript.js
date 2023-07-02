const correctAnswers = [9, 10, 4, 64];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [Number(form.q1.value), Number(form.q2.value), Number(form.q3.value), Number(form.q4.value)];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');
    //result.querySelector('span').textContent = `${score}%`;

    let i = 0;
    const animasyon = setInterval(() => {

        result.querySelector('span').textContent = `${i}%`;
        if (i == score) clearInterval(animasyon);
        i++;
    }, 10);
    if (score === 100) {
        document.querySelector('button').setAttribute('disabled', '');
        document.querySelector('.success').style.display = "inline;";
        document.querySelector('.success').classList.remove('d-none');
        document.querySelector('.success').classList.add('text-success');
    }
});



