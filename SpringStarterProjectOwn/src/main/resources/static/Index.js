"use strict";

function addcarfield() {
  if (addform.value == "Add a new Car") {
    carForm.style.display = "block";
    addform.value = "Hide Form";
  } else {
    carForm.style.display = "none";
    addform.value = "Add a new Car";
  }
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
  if (
    CarMake != "" &&
    ModelName != "" &&
    MakeYear != "" &&
    EngineSize != "" &&
    Price != ""
  ) {
    fetch(`http://localhost:8080/create`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        carMake: CarMake,
        modelName: ModelName,
        makeYear: MakeYear,
        engineSize: EngineSize,
        price: Price,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        console.log(`Request succeeded with JSON response ${data}`)
      )
      .catch((error) => console.log(`Request failed ${error}`));
  }
}

function showCars(id, carMake, modelName, makeYear, engineSize, price) {
  var header = document.createElement("header");
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

  myTableData.appendChild(refRow);
}

let allCarsTable = "";
function allcars() {
  //working and shows data on index
  let refPromise = fetch(`http://localhost:8080/getAll`);
  refPromise.then(function (response) {
    let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      allCarsTable = document.createElement("table");
      allCarsTable.setAttribute("class", "allCarsTable");

      for (let i = 0; i < data.length; i++) {
        showCars(
          data[i].id,
          data[i].carMake,
          data[i].modelName,
          data[i].makeYear,
          data[i].engineSize,
          "£" + data[i].price
        );
      }
    });
  });
}

function viewAllCarsButton() {
  if (viewAllCarsBtn.value == "Hide all cars in stock") {
    myTableData.style.display = "none";
    viewAllCarsBtn.value = "View all cars in stock";
    tableHeader.style.display = "none";
    refreshBtn.style.display = "none";
  } else {
    myTableData.style.display = "block";
    viewAllCarsBtn.value = "Hide all cars in stock";
    tableHeader.style.display = "block"
    refreshBtn.style.display = "block"
  }
}

function refresh(){
  window.location.reload()
}

// function showCarToUpdate(id, carMake, modelName, makeYear, engineSize, price) {
//   var CarID = document.createElement("input");
//   CarID.setAttribute("type", "text");
//   CarID.setAttribute("name", "CarID");
//   CarID.setAttribute("placeholder", id);

//   var CarMakeA = document.createElement("input");
//   CarMakeA.setAttribute("type", "text");
//   CarMakeA.setAttribute("name", "CarMakeA");
//   CarMakeA.setAttribute("placeholder", carMake);

//   var CarModelName = document.createElement("input");
//   CarModelName.setAttribute("type", "text");
//   CarModelName.setAttribute("name", "CarModelName");
//   CarModelName.setAttribute("placeholder", carMake);

//   var CarMakeYear = document.createElement("input");
//   CarMakeYear.setAttribute("type", "text");
//   CarMakeYear.setAttribute("name", "CarMakeYear");
//   CarMakeYear.setAttribute("valplaceholderue", makeYear);

//   var CarEngineSize = document.createElement("input");
//   CarEngineSize.setAttribute("type", "text");
//   CarEngineSize.setAttribute("name", "CarEngineSize");
//   CarEngineSize.setAttribute("placeholder", engineSize);

//   var CarPrice = document.createElement("input");
//   CarPrice.setAttribute("type", "text");
//   CarPrice.setAttribute("name", "CarPrice");
//   CarPrice.setAttribute("placeholder", price);

//   UpdateCarForm.appendChild(CarID);
//   UpdateCarForm.appendChild(CarMakeA);
//   UpdateCarForm.appendChild(CarModelName);
//   UpdateCarForm.appendChild(CarMakeYear);
//   UpdateCarForm.appendChild(CarEngineSize);
//   UpdateCarForm.appendChild(CarPrice);

//   CarID.innerHTML = id;
//   CarMakeA.innerHTML = carMake;
//   CarModelName.innerHTML = modelName;
//   CarMakeYear.innerHTML = makeYear;
//   CarEngineSize.innerHTML = engineSize;
//   CarPrice.innerHTML = price;

//   document.body.appendChild(UpdateCarForm);
// }

// function showCarToUpdate(id, carMake, modelName, makeYear, engineSize, price) {
//   let refRow = document.createElement("tr");
//   let carInfo1 = document.createElement("td");
//   let carInfo2 = document.createElement("td");
//   let carInfo3 = document.createElement("td");
//   let carInfo4 = document.createElement("td");
//   let carInfo5 = document.createElement("td");
//   let carInfo6 = document.createElement("td");

//   carInfo1.innerHTML = id;
//   carInfo2.innerHTML = carMake;
//   carInfo3.innerHTML = modelName;
//   carInfo4.innerHTML = makeYear;
//   carInfo5.innerHTML = engineSize;
//   carInfo6.innerHTML = price;

//   refRow.appendChild(carInfo1);
//   refRow.appendChild(carInfo2);
//   refRow.appendChild(carInfo3);
//   refRow.appendChild(carInfo4);
//   refRow.appendChild(carInfo5);
//   refRow.appendChild(carInfo6);

//   allCarsTable.appendChild(refRow);
//   document.body.appendChild(allCarsTable);
// }

let UpdateCarForm = "";
function getUpdateCarDetails() {
  let id = updateCarBox.value;
  let refPromise = fetch(`http://localhost:8080/get/` + id);
  refPromise.then(function (response) {
    if (response.status != "200") {
      missingIdError.style.display = "inline";
    } if (response.status == "200"){
      updateCarBtn.value = "Cancel";
      missingIdError.style.display = "none";
      updateCarForm.style.display = "inline";
      let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      UpdateCarForm = document.createElement("table");
    

      for (let i = 0; i < data.length; i++) {
        showCarToUpdate(
          data[i].id,
          data[i].carMake,
          data[i].modelName,
          data[i].makeYear,
          data[i].engineSize,
          "£" + data[i].price
        );
      }
    });
  }});
}

function updateCar() {
  let id = updateCarBox.value;
  fetch(`http://localhost:8080/replace/` + id, {
    method: "Put",
  })
    .then((data) => {
      console.log(`Request succeeded with JSON response ${data}`);
    })
    .catch((error) => {
      console.log("Unsuccessful dude");
    });
}

function updateCarField() {
  if (updateCarBtn.value == "Update Car") {
    updateCarBox.style.display = "inline";
    confirmUpdate.style.display = "inline";
    updateCarBtn.value = "Hide";
    updateCarBox.value = "";
  } else {
    updateCarBox.style.display = "none";
    confirmUpdate.style.display = "none";
    updateCarBtn.value = "Update Car";
    updateCarForm.style.display = "none";
  }
}
function UpdateCar() {
  let CarMake = carMakeUp.value;
  let ModelName = modelNameUp.value;
  let MakeYear = makeYearUp.value;
  let EngineSize = engineSizeUp.value;
  let Price = priceUp.value;

  if (CarMake == "") {
    carMakeBoxErrUp.style.visibility = "visible";
  } else {
    carMakeBoxErrUp.style.visibility = "hidden";
  }
  if (ModelName == "") {
    modelNameBoxErrUp.style.visibility = "visible";
  } else {
    modelNameBoxErrUp.style.visibility = "hidden";
  }
  if (MakeYear == "") {
    makeYearBoxErrUp.style.visibility = "visible";
  } else {
    makeYearBoxErrUp.style.visibility = "hidden";
  }
  if (EngineSize == "") {
    engineSizeBoxErrUp.style.visibility = "visible";
  } else {
    engineSizeBoxErrUp.style.visibility = "hidden";
  }
  if (Price == "") {
    priceBoxErrUp.style.visibility = "visible";
  } else {
    priceBoxErrUp.style.visibility = "hidden";
  }
  if (
    CarMake != "" &&
    ModelName != "" &&
    MakeYear != "" &&
    EngineSize != "" &&
    Price != ""
  ) {
    let id = updateCarBox.value;
    fetch(`http://localhost:8080/replace/` + id, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        carMake: CarMake,
        modelName: ModelName,
        makeYear: MakeYear,
        engineSize: EngineSize,
        price: Price,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        console.log(`Request succeeded with JSON response ${data}`)
      )
      .catch((error) => console.log(`Request failed ${error}`));
  }
}



function deleteCarField() {
  if (deleteCarBtn.value == "Delete Car") {
    deleteCarBox.style.visibility = "visible";
    confirmDelete.style.visibility = "visible";
    deleteCarBtn.value = "Hide";
    deleteCarBox.value = "";
  } else {
    deleteCarBox.style.visibility = "hidden";
    confirmDelete.style.visibility = "hidden";
    deleteCarBtn.value = "Delete Car";
  }
}

//missingDeleteIdError.style.visibility = "visible";

function deleteCar() {
  let id = deleteCarBox.value;
  fetch(`http://localhost:8080/remove/` + id, {
    method: "delete",
  })
    .then((data) => {
      console.log(`Request succeeded with JSON response ${data}`);
    })
    .catch((error) => {
      console.log("Unsuccessful dude");

    });
}
