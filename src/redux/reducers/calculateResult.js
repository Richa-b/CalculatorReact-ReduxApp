export function calculate(currentState = 0, action) {
    switch (action.type) {
        case 'CALCULATE':
            return calculateResult(Number(action.a),Number(action.b),action.op);
        default:
            return currentState
    }
}


function calculateResult(firstNum, secondNum, op) {
    switch (op) {
        case '+' :
            return firstNum + secondNum;
        case '-' :
            return firstNum - secondNum;
        case '*' :
            return firstNum * secondNum;
        case '/' :
            return firstNum / secondNum;
        default :
            return 0;

    }
}