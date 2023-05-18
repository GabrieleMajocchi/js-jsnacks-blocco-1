
const Sendit = document.querySelector('button');

sendit.addEventListener('click', 
    function(){

        
        let oddnumbers = [];
        let evennumbers = [];

        let = firstnumber = parseInt(document.getElementById('firstnumber').value);
        let = secondnumber = parseInt(document.getElementById('secondnumber').value);
        let = thirdnumber = parseInt(document.getElementById('thirdnumber').value);
        let = fourthnumber = parseInt(document.getElementById('fourthnumber').value);
        let = fifthnumber = parseInt(document.getElementById('fifthnumber').value);
        let = sixthnumber = parseInt(document.getElementById('sixthnumber').value);

        if(firstnumber % 1 === 0 && firstnumber % 2 !== 0){
            oddnumbers.push(firstnumber);
        }else{
            evennumbers.push(firstnumber);
        }
        
        if(secondnumber % 1 === 0 && secondnumber % 2 !== 0){
            oddnumbers.push(secondnumber);
        }else{
            evennumbers.push(secondnumber);
        }
        
        if(thirdnumber % 1 === 0 && thirdnumber % 2 !== 0){
            oddnumbers.push(thirdnumber);
        }else{
            evennumbers.push(thirdnumber);
        }
        
        if(fourthnumber % 1 === 0 && fourthnumber % 2 !== 0){
            oddnumbers.push(fourthnumber);
        }else{
            evennumbers.push(fourthnumber);
        }
        
        if(fifthnumber % 1 === 0 && fifthnumber % 2 !== 0){
            oddnumbers.push(fifthnumber);
        }else{
            evennumbers.push(fifthnumber);
        }
        
        if(sixthnumber % 1 === 0 && sixthnumber % 2 !== 0){
            oddnumbers.push(sixthnumber);
        }else{
            evennumbers.push(sixthnumber);
        }

        document.getElementById('result').innerHTML = 'I numeri dispari inseriti sono '+ oddnumbers +' mentre quelli pari sono '+evennumbers;
    }
)