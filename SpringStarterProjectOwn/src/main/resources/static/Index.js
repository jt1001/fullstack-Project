"use strict";

let allcars = () => {
  fetch(`http://localhost:8080/getAll`)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`status: ${reponse.status}`);
        return;
      }
      response.json().then((data) => console.info(data));
    })
    .catch((err) => console.error(`${err}`));
};
// function appendData(data) {
//     var mainContainer = document.getElementById("allcarsData");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'ID: ' + data[i].id + 'Car Make' + data[i].carMake;
//         mainContainer.appendChild(div);
//     }
// }
