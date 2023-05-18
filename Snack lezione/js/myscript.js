
// ----Check se una parola è più lunga dell'altra----

const Sendit = document.querySelector('button')

sendit.addEventListener('click', 
    function(){
        let = firstword = document.getElementById('firstword')
        let = secondword = document.getElementById('secondword')

        console.log(firstword)

    if(firstword.textLength > secondword.textLength){
        document.getElementById('result').innerHTML = firstword.value + ' ' + secondword.value;
    }else if(firstword.textLength < secondword.textLength){
        document.getElementById('result').innerHTML = secondword.value + ' ' + firstword.value;
    }else{
        document.getElementById('result').innerHTML = 'le due parole sono lunghe uguali';
    }
}
)