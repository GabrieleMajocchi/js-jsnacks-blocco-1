const Sendit = document.querySelector('button');

sendit.addEventListener('click', 
    function(){

        let number = document.getElementById('number').value;

        let firstdigit = parseInt(number.charAt(0));
        let seconddigit = parseInt(number.charAt(1));
        let thirddigit = parseInt(number.charAt(2));
        let fourthdigit = parseInt(number.charAt(3));

        let sum = firstdigit+seconddigit+thirddigit+fourthdigit;

        document.getElementById('result').innerHTML = 'La somma delle cifre è: ' + sum;
    }
)