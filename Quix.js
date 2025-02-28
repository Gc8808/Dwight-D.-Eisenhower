function questionPrompt() {
    let respQue = '';  
    let userAns = prompt('When was Dwight D Eisenhower born?, How old was Dwight D Eisenhower when he passed? Answer in the format of mm/dd/yyyy,Age');

    if (userAns === '10/14/1890,78') {
        respQue = 'Correct';  
    } else {
        respQue = 'Incorrect';  
    }

    document.getElementById('Ans').innerHTML = respQue;  
}
