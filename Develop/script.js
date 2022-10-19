
var now = moment();
$('#currentDay').text(now.format('dddd' + ", " + "MMMM Do"));




  




var saves = [];
var addSave = (ev)=>{
    ev.preventDefault();
    var save = {
        inpVal: document.getElementById('inpVal').value, 
    // console logging to see if this gd button works. Okay it does now. 
    // I'll either have to repeat this process for each button or find a better way to do this.
}
saves.push(save);
;

localStorage.setItem("WorkDayPlans", JSON.stringify(saves) );
}

//need the document to load
document.addEventListener('DOMContentLoaded', ()=> {

//there is probably a less tedious way to do this.    
document.getElementById('button-addon').addEventListener('click', addSave);
document.getElementById('button-addon1').addEventListener('click', addSave);
document.getElementById('button-addon2').addEventListener('click', addSave);
document.getElementById('button-addon3').addEventListener('click', addSave);
document.getElementById('button-addon4').addEventListener('click', addSave);
document.getElementById('button-addon5').addEventListener('click', addSave);
document.getElementById('button-addon6').addEventListener('click', addSave);
document.getElementById('button-addon7').addEventListener('click', addSave);
document.getElementById('button-addon8').addEventListener('click', addSave);


});