"use strict";

function allcars(){ //working and shows data on index
    let refPromise=fetch(`http://localhost:8080/getAll`)
    refPromise.then(
        function(response) {
            let refResponsePromise=response.json()
            refResponsePromise.then(function(data){

                for(let i=0;i<data.length;i++){

                    let refDiv=document.createElement("div")
                    refDiv.innerHTML="ID: "+ data[i].id + "Car Make: "+data[i].carMake + "Model: " + data[i].modelName + "Year: " + data[i].makeYear + "Engine Size: " + data[i].engineSize + "Price: " + data[i].price
                    document.body.appendChild(refDiv)
                }
            })
        }
    )
}

// let allcars = () => {
//   fetch(`http://localhost:8080/getAll`)
//     .then((response) => {
//       if (response.status !== 200) {
//         console.error(`status: ${response.status}`);
//         return;
//       }
//       response.json().then((data) => console.info(data));
//     })
//     .catch((err) => console.error(`${err}`));
// };

// var mainContainer = document.getElementById("allcarsData");

// function viewAllCars() {
//     let data = allcars();
//         for (let d in data) {
//       let div = document.createElement("div");
//       div.innerHTML = `ID: ${d.id}, carMake: ${d.carMake}, modelName: ${d.modelName}, makeYear: ${d.makeYear}, engineSize: ${d.engineSize}, price: ${d.price}`;
//       mainContainer.appendChild(div);
//     }
//   }

// function viewAllCars() {
//   let refTable= document.createElement("table");
  
//   let data = allcars();
//   for (let i=0;i<data.length;i++) {
//     let refRow=document.createElement("tr")
//     let refTd1=document.createElement("td")
//     let refTd2=document.createElement("td")
//     let refTd3=document.createElement("td")
//     let refTd4=document.createElement("td")
//     let refTd5=document.createElement("td")
//     let refTd6=document.createElement("td")

//     refTd1.innerHTML=data[i].id
//     refTd2.innerHTML=data[i].carMake
//     refTd1.innerHTML=data[i].modelName
//     refTd2.innerHTML=data[i].makeYear
//     refTd1.innerHTML=data[i].engineSize
//     refTd2.innerHTML=data[i].price

//     refRow.appendChild(refTd1);
//     refRow.appendChild(refTd2);
//     refRow.appendChild(refTd3);
//     refRow.appendChild(refTd4);
//     refRow.appendChild(refTd5);
//     refRow.appendChild(refTd6);

//     refTable.appendChild(refRow)
//   }
//   document.body.appendChild(refTable)
// }




