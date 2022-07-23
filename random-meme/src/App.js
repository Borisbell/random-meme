import React from "react";

function App() {
  const [imageURL, setImageURL] = React.useState('https://cataas.com/cat/gif');

  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  const getCatPic = () => {
    return fetch('https://cataas.com/cat?json=true')
  .then((res) => checkResponse(res))
  }
  
  const handleNewCatImage = () => {
    getCatPic()
      .then((res => {
        setImageURL('https://cataas.com' + res.url);
      })
    )
  }

  const getFoxPic = () => {
    return fetch(`https://randomfox.ca/floof`)
    .then((res) => 
      checkResponse(res)
    );
  }

  const handleNewFoxImage = () => {
    getFoxPic()
      .then((res => {
        setImageURL(res.image);
      })
    )
  }

  const randomDog = () => {
    return fetch(`https://random.dog/woof.json`)
    .then((res) =>
      checkResponse(res)
    );
  }

  const handleNewDogImage = () => {
    randomDog()
      .then((res => {
        setImageURL(res.url);
      })
    )
  }

  return (
    <div className="App">
        <img src={imageURL} alt="meme" className="image"/>
        <div className="buttons">
          <button onClick={handleNewCatImage}>New Cat Image</button>
          <button onClick={handleNewDogImage}>New Dog Image</button>
          <button onClick={handleNewFoxImage}>New Fox Image</button>
        </div> 
    </div>
  );
}

export default App;
