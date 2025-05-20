document.getElementById('myFirstButton').addEventListener('mousedown', emptyTheField);
document.getElementById('tryMe').addEventListener('mousedown', setTheFieldText);

function emptyTheField(){
document.getElementById('entryBox').value ="";
}

function setTheFieldText(){                            
    document.getElementById('entryBox').value ="Good job";
}
    
    