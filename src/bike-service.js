export default class BikeService {
  static getBike(zipCode) {
    return fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&colors=&location=${zipCode}&distance=10&stolenness=proximity`)
      .then(function(response){
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}

// function listBikes() {
//   body.forEach(function(bikes) {
//     let titles = this.title;
//     let color = this.frame_colors;
//     let image = this.thumb;
//     let url = this.url;
//   })
//   console.log(titles);
//   console.log(color);
//   console.log(image);
//   console.log(url);
// }