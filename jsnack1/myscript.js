// ----Prendo i 10 input numerici e li sommo----

const Sendit = document.querySelector('button');

sendit.addEventListener('click', 
    function(){
        let = firstnumber = parseInt(document.getElementById('firstnumber').value);
        let = secondnumber = parseInt(document.getElementById('secondnumber').value);
        let = thirdnumber = parseInt(document.getElementById('thirdnumber').value);
        let = fourthnumber = parseInt(document.getElementById('fourthnumber').value);
        let = fifthnumber = parseInt(document.getElementById('fifthnumber').value);
        let = sixthnumber = parseInt(document.getElementById('sixthnumber').value);
        let = seventhnumber = parseInt(document.getElementById('seventhnumber').value);
        let = eighthnumber = parseInt(document.getElementById('eighthnumber').value);
        let = ninthnumber = parseInt(document.getElementById('ninthnumber').value);
        let = tenthnumber = parseInt(document.getElementById('tenthnumber').value);

        document.getElementById('result').innerHTML = firstnumber + secondnumber + thirdnumber + fourthnumber + fifthnumber + sixthnumber + seventhnumber + eighthnumber + ninthnumber + tenthnumber;
    }
)