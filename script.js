let xmen = [
    ['images/8.png','images/5.png', 'images/9.png'],
    ['images/4.png','images/6.png', 'images/7.png'],
    ['images/1.png','images/2.png', 'images/3.png'],
    ['images/8.png','images/5.png', 'images/9.png'],
    ['images/4.png','images/6.png', 'images/7.png'],
    ['images/1.png','images/2.png', 'images/3.png']
];

// global variables
let firstCell = null; //stores the first clicked <td> element
let firstRow = -1;
let firstCol = -1;
let matches = 0;
let attempts = 0;

function playGame(){
    let html = `<table border="1">`;

    for (let i= 0; i< xmen.length; i++){
        html +="<tr>";
        for (let j = 0; j< xmen[i].length; j++){
            html += `<td onclick="cellClicked(this, ${i},${j})">?</td>`;
        }
        html+= `</tr>`;
    }

html += `</table>`
document.getElementById("grid").innerHTML= html;

//reset
 firstCell= null;
firstRow = -1;
firstCol= -1; 
//   matches= 0;
//  attempts = 0;
//  displayStats();
 document.getElementById("message").innerHTML= "";
}



function cellClicked(cell, row, col){
    // "cell" is the actual <td> that was clicked
   if ( cell.innerHTML!=="?") return;//revealed the character

        cell.innerHTML= `<img src="${xmen[row][col]}">`
        if( firstRow === -1){
            // first click
            firstCell =cell;
            firstRow = row;
            firstCol= col;
            // document.getElementById("message").innerHTML = "";
        } else{
            // second click
            attempts++;
            if(xmen[firstRow][firstCol] === xmen[row][col]){
                // match - leave both revealed 
                matches++;
                document.getElementById("message").innerHTML = " Match Found!";
            }
            else {
                // no match found
                firstCell.innerHTML = "?";
                cell.innerHTML = "?";
                document.getElementById("message").innerHTML = "Try Again";
            }

            //reset
            firstCell= null;
            firstRow = -1;
            firstCol= -1;
            displayStats();
            
        }
}

function displayStats(){
    document.getElementById("stats").innerHTML = `matches: ${matches} | Attempts: ${attempts}`;
}
