"use strict";

function addcarfield() {
  if (addform.value == "Add a new Car") {
    carForm.style.visibility = "visible";
    addform.value = "Hide Form";
  } else {
    carForm.style.visibility = "hidden";
    addform.value = "Add a new Car";
  }
}

function showCars(id, carMake, modelName, makeYear, engineSize, price) {
  let refRow = document.createElement("tr");
  let refTd1 = document.createElement("td");
  let refTd2 = document.createElement("td");
  let refTd3 = document.createElement("td");
  let refTd4 = document.createElement("td");
  let refTd5 = document.createElement("td");
  let refTd6 = document.createElement("td");

  refTd1.innerHTML = id;
  refTd2.innerHTML = carMake;
  refTd3.innerHTML = modelName;
  refTd4.innerHTML = makeYear;
  refTd5.innerHTML = engineSize;
  refTd6.innerHTML = price;

  refRow.appendChild(refTd1);
  refRow.appendChild(refTd2);
  refRow.appendChild(refTd3);
  refRow.appendChild(refTd4);
  refRow.appendChild(refTd5);
  refRow.appendChild(refTd6);

  refTable.appendChild(refRow);
  document.body.appendChild(refTable);
}

function createCar() {
  
}

function viewAllCarsButton() { //NEEDS FIXING
  if (viewCarsBtn.value == "View all cars in stock") {
    carForm.style.visibility = "visible";
    addform.value = "Hide Form";
  } else {
    carForm.style.visibility = "hidden";
    addform.value = "Add a new Car";
  }
}

let refTable = "";
function allcars() {
  //working and shows data on index
  let refPromise = fetch(`http://localhost:8080/getAll`);
  refPromise.then(function (response) {
    let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      refTable = document.createElement("table");
      refTable.border = 10;

      for (let i = 0; i < data.length; i++) {
        showCars(
          data[i].id,
          data[i].carMake,
          data[i].modelName,
          data[i].makeYear,
          data[i].engineSize,
          data[i].price
        );
      }
    });
  });
}

// function allcars(){ //working and shows data on index
//     let refPromise=fetch(`http://localhost:8080/getAll`)
//     refPromise.then(
//         function(response) {
//             let refResponsePromise=response.json()
//             refResponsePromise.then(function(data){

//                 for(let i=0;i<data.length;i++){
//                     document.createElement

//                     let refDiv=document.createElement("div")
//                     refDiv.innerHTML="ID: "+ data[i].id + "Car Make: "+data[i].carMake + "Model: " + data[i].modelName + "Year: " + data[i].makeYear + "Engine Size: " + data[i].engineSize + "Price: " + data[i].price
//                     document.body.appendChild(refDiv)
//                 }
//             })
//         }
//     )
// }
