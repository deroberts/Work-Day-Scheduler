document.addEventListener('DOMContentLoaded', ()=> {
  // console.log("let's gooo")

  //use moment to set the day of the week, month, then day.
const now = moment();
$('#currentDay').text(now.format('dddd' + ", " + "MMMM Do"));


//set the workday hour slot display
let hours = [
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
    ];

//hour
const currentHour = now.format("h"); 
// am/pm
const amPm = now.format("a");
//declare empty array for local storage
const saves = JSON.parse(localStorage.getItem("saves")) || [];
//declare text input element variable 
var inputEl;
//get the local storage values
const savedCalendarNotes = JSON.parse(localStorage.getItem("saves"));
  
    //add notes to local storage
    //check to see if the iterated time has notes. if so pull from the local storage
    function addPlan() {
      $.each(hours, function (i, time) {
        $.each(savedCalendarNotes, function (j, val) {
          if (time === val.time) {
            let noteEl = $(`[data-time=${time}]`);
            //set the note field
            noteEl.val(val.note);
          }
        });
      });
    }
           
    //set the index variables
    let getIndex;
    let currentTimeIndex;
  

 
    //run loop to display hourly time from 9-5 along with text input and save button
    $.each(hours, function (i, time) {
      //format current time
      let currentTime = currentHour + amPm.toUpperCase();
      //first get the index of the iterated time that is not equal to the current time
      getIndex = hours.indexOf(currentTime);
      currentTimeIndex = hours.indexOf(time);
  
      if (currentTime === time) {
        //define the input field to add style during loop based on current time
        inputEl = `<input type='text' class='bg-danger col border p-3 note text-light' value='' data-time=${time} />`;
        //capture index
      } else {
        //turn times in the past grey, and times in the future green
  
        //if in the work day time period but not the current time and after the current iteration
        if (getIndex !== -1 && getIndex < currentTimeIndex) {
          //make the elements green 
          inputEl = `<input type='text' class='bg-success col border p-3 note text-light' value='' data-time=${time} />`;
        } else {
          //set all other timeslots to gray
          inputEl = `<input type='text' class='bg-secondary col border p-3 note text-dark' value='' data-time=${time} />`;
        }
      }
  
      //create a row for each item in the array rather than repeating the process 
      //create a row with 3 columns for the time, input, and save button
      //add the save icon to button
        let row = $(`<div class='row'>
        <div class="col-2 text-right border-top border-bottom p-3 time">
            ${time}
        </div>
            ${inputEl}
        <button class="btn-sm btn-info col-2 border-top border-bottom p-3 save">
            Save <i class="far fa-save"></i>
        </button>`);
      
        $(".calendar").append(row);
    
    });
  
    //get selected input value
    $(".save").on("click", function () {
      //save selected time and input to value
        saves.push({
            time: $(this).prev().prev().text().trim(),
            note: $(this).prev().val(),
        });
        
        console.log($(this).prev().val())
      //json saves
        localStorage.setItem("saves", JSON.stringify(saves));
    
    });
    //run the function
    addPlan();
  });
  
  

  

// var saves = [];
// var addSave = (ev)=>{
//     ev.preventDefault();
//     var save = {
//         inpVal: document.getElementById('inpVal').value, 
//     // console logging to see if this gd button works. Okay it does now. 
//     // I'll have to repeat this process for each button 
// }
// saves.push(save);
// ;
// localStorage.setItem("saves", JSON.stringify(saves) );
//there is probably a less tedious way to do this.    

