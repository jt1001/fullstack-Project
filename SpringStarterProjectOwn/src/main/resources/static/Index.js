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

let allCarsTable = "";
function allcars() {
  //working and shows data on index
  let refPromise = fetch(`http://localhost:8080/getAll`);
  refPromise.then(function (response) {
    let refResponsePromise = response.json();
    refResponsePromise.then(function (data) {
      allCarsTable = document.createElement("table");
      allCarsTable.border = 10;
      allCarsTable.style = "width:100%";

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
    allCarsTable.style.visibility = "hidden";
    viewAllCarsBtn.value = "View all cars in stock";
  } else {
    allCarsTable.style.visibility = "visible";
    viewAllCarsBtn.value = "Hide all cars in stock";
  }
}

function deleteCarField() {
  if (deleteCarBtn.value == "Delete Car") {
    deleteCarBox.style.visibility = "visible";
    confirmDelete.style.visibility = "visible";
    deleteCarBtn.value = "Hide";
  } else {
    deleteCarBox.style.visibility = "hidden";
    confirmDelete.style.visibility = "hidden";
    deleteCarBtn.value = "Delete Car";
  }
}

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
