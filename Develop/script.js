//make sure page is ready
$(document).ready(function() {

//display date at the top using moment
var now = moment();
$('#currentDay').text(now.format('dddd' + ", " + "MMMM Do"));

});