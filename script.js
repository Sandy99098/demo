function calculate() {
    let principle = document.getElementById('p').value;
    let time = document.getElementById('t').value;
    let rate = document.getElementById('r').value;
    let result = (principle * time * rate) / 100;
    document.getElementById('result').innerHTML = result;
}