const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const nat = document.getElementById('nat');

function presentesagr()
{return nat.src.indexOf ( 'presentes' ) > -1 }


function natalON () 
{if ( !presentesagr()){
    nat.src = './imagem arvore/natal.jpg';}
}

 function natalOff()
 { if ( !presentesagr()){
    nat.src = './imagem arvore/inicio.jpg';}
 }

 function preseteOn()
 {nat.src = './imagem arvore/presentes.jpg';}

turnOn.addEventListener('click', natalON);
turnOff.addEventListener('click', natalOff);
nat.addEventListener( 'mouseover', natalON );
nat.addEventListener('mouseleave', natalOff);
nat.addEventListener('dblclick', preseteOn);
 