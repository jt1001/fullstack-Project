function addcarfield() {
  alert("connect me to add new car :(");
}


const allCars = async () => { //async allows this function to return a promise!!!
  let response = await fetch('http://localhost:8080/getAll');
  if (response.status !== 200) {
      throw new Error("Request has failed!");

  }
  console.log("Request Successful");
  let jsonData = await response.json();
  console.log(jsonData);
  return jsonData.data;
}

allCars();

// let showAllCars = async () => {
//   let returnedData = await allCars();
//   paragraphToSelect.innerHTML = "";
//   //Ita through the json data
//   for (let d of returnedData) {
//           let div = document.createElement("div");
//           //adding styling to each div 
//           div.style = "margin:10px;"
//           //matching the object syntax given in console.log(data)
//           div.innerHTML = `Firstname: ${d.first_name}, Lastname: ${d.last_name}, Email: ${d.email}`;
//           //appending our para -> div
//           paragraphToSelect.append(div);
//       }
//   }