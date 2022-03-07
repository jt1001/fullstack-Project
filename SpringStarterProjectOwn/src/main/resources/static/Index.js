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
  let carInfo1 = document.createElement("td");
  let carInfo2 = document.createElement("td");
  let carInfo3 = document.createElement("td");
  let carInfo4 = document.createElement("td");
  let carInfo5 = document.createElement("td");
  let carInfo6 = document.createElement("td");

  carInfo1.innerHTML = id;
  carInfo2.innerHTML = carMake;
  carInfo3.innerHTML = modelName;
  carInfo4.innerHTML = makeYear;
  carInfo5.innerHTML = engineSize;
  carInfo6.innerHTML = price;

  refRow.appendChild(carInfo1);
  refRow.appendChild(carInfo2);
  refRow.appendChild(carInfo3);
  refRow.appendChild(carInfo4);
  refRow.appendChild(carInfo5);
  refRow.appendChild(carInfo6);

  allCarsTable.appendChild(refRow);
  document.body.appendChild(allCarsTable);
}

function createCar() {
  let CarMake = carMake.value;
  let ModelName = modelName.value;
  let MakeYear = makeYear.value;
  let EngineSize = engineSize.value;
  let Price = price.value;

  if (CarMake == "") {
    carMakeBoxErr.style.visibility = "visible";
  } else {
    carMakeBoxErr.style.visibility = "hidden";
  }
  if (ModelName == "") {
    modelNameBoxErr.style.visibility = "visible";
  } else {
    modelNameBoxErr.style.visibility = "hidden";
  }
  if (MakeYear == "") {
    makeYearBoxErr.style.visibility = "visible";
  } else {
    makeYearBoxErr.style.visibility = "hidden";
  }
  if (EngineSize == "") {
    engineSizeBoxErr.style.visibility = "visible";
  } else {
    engineSizeBoxErr.style.visibility = "hidden";
  }
  if (Price == "") {
    priceBoxErr.style.visibility = "visible";
  } else {
    priceBoxErr.style.visibility = "hidden";
  }

  if (CarMake != "" && ModelName !="" && MakeYear != "" && EngineSize != "" && Price != "") {
    fetch(`http://localhost:8080/create`, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        {
          "carMake": CarMake,
          "modelName": ModelName,
          "makeYear": MakeYear,
          "engineSize": EngineSize,
          "price": Price
        }
      )
    })
    .then(res => res.json())
    .then((data) => console.log(`Request succeeded with JSON response ${data}`))
    .catch((error) => console.log(`Request failed ${error}`));
  }

  


}


let allCarsTable = "";
function allcars() {
  //working and shows data on index
  let refPromise = fetch(`http://localhost:8080/getAll`);
  refPromise.then(function (response) {
    let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      allCarsTable = document.createElement("table");
      allCarsTable.border = 10;

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
function viewAllCarsButton() { //NEEDS FIXING
  if (viewAllCarsBtn.value == "View all cars in stock") {
    allcars();
    viewAllCarsBtn.value = "Hide all cars in stock";
  } else {
    allCarsTable.style.visibility = "hidden";
    viewAllCarsBtn.value = "View all cars in stock";
  }
}

function addNewCar() {
  let refPromise = fetch(`localhost:8080/create`);
  refPromise.then(function (response) {
    let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      allCarsTable = document.createElement("table");
      allCarsTable.border = 10;

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