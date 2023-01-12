let submit = document.getElementById("submit");
const cellContainer = document.getElementById('cell-container');
var caselle = 0;
var righe = 0;
var bombs = [];
let punteggio = 0;
let morti = 0;

submit.onclick = function(){

    let choose = document.getElementById("choose").value;


    if(choose == "Peaceful"){
        caselle = 100;
        righe = 10;
    }
    else if(choose == "Medium"){
        caselle = 81;
        righe = 9;
    }

    else if (choose == "Hard"){
        caselle = 49;
        righe = 7;
    }
    
    else {
        alert("Hai inserito dati sbagliati");
    }


    for (let i = 1; i <= caselle; i++) {

        const newCell = createNewCell(i);
        cellContainer.append(newCell);

    }

    bombs = Array.from({ length: 16 }, () => Math.floor(Math.random() * caselle));

}



function createNewCell(num) {
    const cell = document.createElement('div');
    let score = document.getElementById("score");
    cell.classList.add('cell');
    cell.style.height = "calc(100% / " + righe + ")";
    cell.style.width = "calc(100% / " + righe + ")";
    cell.addEventListener('click',
        function () {

            let flag = 0;
            for(let i = 0; i < bombs.length; i++){
                if(num == bombs[i]){
                    flag = 1;
                }
            }

            if(flag == 1){
                cell.style.background = "red";
                morti = morti +1;
            }
            else{
                cell.style.background = "blue";
                punteggio = punteggio + 1;
            }

            if (punteggio == caselle - 16){
                alert ("vinto");
            }
            else if (morti == 16 ){
                alert("perso");
            }
            else{
                score.innerHTML = "Punteggio :" + punteggio
            }

            console.log(punteggio);

        }
        
    );

    cell.innerHTML = num;
    return cell;

}

