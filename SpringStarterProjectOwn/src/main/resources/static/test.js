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

  allcars()