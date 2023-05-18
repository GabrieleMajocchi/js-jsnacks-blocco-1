
const AllowedNames = [ 'Cecil', 'Gulick', 'Dewer', 'Newton', 'Albrucksburger', 'Willie '];

const AmmountToCheck = AllowedNames.length

const Check = document.querySelector('button')

Check.addEventListener('click', 
function(){

    let UserName = document.querySelector('#name').value;

    allowed = false;

    for (let i = 0; i < AmmountToCheck; i++){

        if ( UserName === AllowedNames[i] ){
            allowed = true;
        }
    }

    if(allowed){
        document.getElementById('response').innerHTML = 'Benvenuto '+UserName+" ecco l'invito per la festa.";
        document.getElementById('invite').style.display = 'block';
    }else{
        document.getElementById('response').innerHTML = 'Mi spiace '+UserName+'  non è nella lista.';
        document.getElementById('invite').style.display = 'none';
    }
}
)