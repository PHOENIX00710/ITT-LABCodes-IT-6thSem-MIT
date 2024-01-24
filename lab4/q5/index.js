const calclatorButtons = document.getElementsByClassName('buttons')[0]
const input = document.getElementById('calculator-input')
const equalsButton = document.querySelector('#equal')
let expression = ""

equalsButton.addEventListener('click', (e) => {
    e.preventDefault()
    try {
        let ans = eval(expression)
        ans = ans.toFixed(4)
        expression = ans.toString()
        input.value = ans.toString()
    }
    catch (e) {
        input.value = "Bad Syntax. Kindly clear"
    }
})

calclatorButtons.addEventListener('click', (e) => {
    e.preventDefault()
    let currEvent = e.target;
    if (currEvent.tagName == "BUTTON") {
        let val = currEvent.value
        if (val == 'C') {
            expression = ""
            input.value = ""
        }
        else if (val == "x") {
            let tempArray = Array.from(expression)
            tempArray.pop()
            expression = ""
            for (let i of tempArray) {
                expression += (i.toString())
            }
            console.log(expression);
            input.value = expression;
        }
        else {
            expression += val
            input.value = expression;
        }
    }
})