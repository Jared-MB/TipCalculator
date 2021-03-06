const calc = document.querySelector("body > form.container > div.peopleContainer > input[type=submit]")

calc.addEventListener('click', e => {
    e.preventDefault();
    billPerPerson = billPerson(getBill(), getPeople());
    tipPerPerson = getTip(tipAmount, getPeople(), getBill());
    
    const totalPerPerson = document.getElementById('total');
    const tipTotal = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');
    
    totalPerPerson.value = billPerPerson;
    tipTotal.value = tipPerPerson;
    totalBill.value = tipPerPerson + billPerPerson

    countB = 0;
    countP = 0;
    countBA = 0;

    button.classList.remove('tip');
})

const billPerson = (bill, person) => {
    let result = (Number(bill) / Number(person))
    return result
}

let countB = 0;
let countBA = 0;
let countP = 0;

const getBill = () => {
    const bill = document.getElementById('bill').value;
    if(isNaN(bill) && countB == 0){
        alert('El valor debe ser una cantidad numérica');
        countB++
    }
    else if(Number(bill) < 0 && countBA == 0){
        alert('Debe ser un valor positivo')
        countBA++
    }
    else return bill
}

const getPeople = () => {
    const people = document.getElementById('people').value;
    if (isNaN(people)){
        alert('¿Que acabas de hacer? Por favor regresa el valor del input a numeros para continuar');
    }
    else if (Number(people) <= 0 && countP == 0){
        alert('Al menos debe pagar la cuenta una persona, ¿no te parece razonable?');
        countP++;
    }
    else return people
}

const getTip = (tip, people, bill) => {
    tipPerPerson = (bill*tip)/people;
    return tipPerPerson
}

const tipContainer = document.querySelector('.tipContainer');
let tipAmount = 0;
let button = null;
tipContainer.addEventListener('click', e => {
    if (button == null && !isNaN(e.path[0].id)){
        button = e.path[0];
    }
    else if (!isNaN(e.path[0].id)){ 
        button.classList.remove('tip');
        button = e.path[0]
    }
    if (!isNaN(e.path[0].id)){
        e.path[0].classList.add('tip')
        tipAmount = (e.path[0].id)/100
    }
    if (tipContainer.classList.contains('tip')){
        tipContainer.classList.remove('tip')
    }
    e.preventDefault();
})

const custom = document.getElementById('custom');
custom.addEventListener('change', () => {
    if (button.classList.contains('tip')) {
        button.classList.remove('tip')
    }
    tipAmount = custom.value/100
})
