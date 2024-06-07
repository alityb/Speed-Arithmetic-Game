let score = 0;
let currentEquation;

function generateEquation() {
    let num1, num2, operator;
    do {
        num1 = Math.floor(Math.random() * 99) + 1;
        num2 = Math.floor(Math.random() * 99) + 1;
        operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

        if(operator === '/' && num1 % num2 !== 0) {
            continue;
        }
    } while(operator === '/' && num1 % num2 !==0);
    
    currentEquation = `${num1} ${operator} ${num2}`;

    if(operator === '-' && num1 < num2) {
        currentEquation = `${num2} ${operator} ${num1}`;
    }

    document.getElementById('equation').textContent = currentEquation;
}

function checkAnswer() {
    const userAnswer = document.getElementById('userInput').value;
    const correctAnswer = eval(currentEquation);

    if (parseInt(userAnswer) === correctAnswer) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        generateEquation();
        document.getElementById('userInput').value = '';
    }

}


const userInput = document.getElementById('userInput');
userInput.addEventListener('input', () => {
    checkAnswer();
});


generateEquation();