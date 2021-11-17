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

function getElements(response) {
  if (response.bikes[0]) {
    $('.showTitle').text(`Year and Make: ${response.bikes[0].title}`);
    $('.showColor').text(`Frame Colors: ${response.bikes[0].frame_colors}`);
    $('.showImage').attr('src', response.bikes[0].thumb);
    $('.showURL').html(`Click here if you want to see the full bike page <a href='${response.bikes[0].url}'>CLICK</a>`)
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function(){
  $('#bikeZipCode').click(function(){
    let zip = $('zipCode').val();
    clearFields();
    BikeService.getBike(zip)
      .then(function(response){
        getElements(response);
      });
  });
});

//comment


