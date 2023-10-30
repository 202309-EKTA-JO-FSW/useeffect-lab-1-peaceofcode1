import React, { useState, useEffect } from "react";

export default function ShoppingList() {
  const [dogsList, setDogsList] = useState([]);
  const [numImages, setNumImages] = useState(3); 

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${numImages}`);
        const data = await response.json();
        setDogsList(data.message);
      } catch (error) {
        console.error("Error fetching dog images: ", error);
      }
    };

    fetchDogs();
  }, [numImages]);

  const handleInputChange = (event) => {
    setNumImages(event.target.value);
  };

  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      <div>
        <input
          type="number"
          value={numImages}
          onChange={handleInputChange}
          min={1}
          max={10} 
        />
        <button onClick={() => fetchDogs(numImages)}>Fetch Dogs</button>
      </div>
      {dogsList.map((dog, index) => (
        <img key={index} src={dog} alt={`dog ${index}`} />
      ))}
    </div>
  );
}
