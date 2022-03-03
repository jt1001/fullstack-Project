function addcarfield() {
  alert("connect me to add new car :(");
}


let allCars = () => fetch('http://localhost:8080/getAll')
.then ((resonse) => {
    if (resonse.status !== 200) {
        console.error('status: ${response.status}');
        return;
    }
    resonse.json()
    .then(data => { console.log(data.data) ;return data.json})
}) .catch((err) =>console.log('${err'));
allCars();