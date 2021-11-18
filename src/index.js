import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-service.js';

function clearFields() {
  $('#zipCode').val("");
  $('.showErrors').val("");
  $('#showTitle').val("");
  $('#showColor').val("");
  $('#showImage').val("");
  $('#showURL').val("");
}

// function getElements(response) {
//   if (response.bikes[0]) {
//     response.bikes.forEach(function(bike){
// $('.showTitle').text(`Year and Make: ${bike.title}`);
//       $('.showColor').text(`Frame Colors: ${bike.frame_colors}`);
//       $('.showImage').attr('src', bike.thumb);
//       $('.showURL').html(`Click here if you want to see the full bike page <a href='${bike.url}'>CLICK</a>`)
//     })
//     } else {
//       $('.showErrors').text(`There was an error: ${response.message}`);
//     }
//   }



function getElements(response) {
  // let bikeTitle = "";
  // response.bikes.forEach(function(i){
    // const bikeList = response.bikes;
    for(let i=0;i<response.bikes.length; i++) {
      let bikeTitle = response.bikes[i].title;
      let bikeColor = response.bikes[i].frame_colors;      
      let bikeImage = response.bikes[i].thumb;
      let bikeURL = response.bikes[i].url;
      
      if(bikeImage===null){
        bikeImage="assets/images/pee-wee.gif"}

      $('#results').append("<li>" + bikeTitle + "<br>Color: " + bikeColor + "<br><a href=" + bikeURL+ "><img src="+ bikeImage+ "></a></li>");
  }
}

$(document).ready(function () {
  $('#bikeZipCode').click(function () {
    let zip = $('#zipCode').val();
    // console.log(zip);
    clearFields();
    BikeService.getBike(zip)
      .then(function (response) {
        getElements(response);
        // $('#results').append("<li>" + something + "</li>")
      });
  });
});