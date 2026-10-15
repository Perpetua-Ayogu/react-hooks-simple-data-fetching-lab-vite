
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchDogImage() {
    setLoading(true);
    setError(null);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setError("Failed to load dog image.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDogImage();
  }, []);

  function handleClick() {
    fetchDogImage();
  }

  return (
    <div>
      <h1>Dog Images</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {image && (
        <img
          src={image}
          alt="Random Dog"
        />
      )}

      <button onClick={handleClick}>
        Fetch Dog Image
      </button>
    </div>
  );
}

export default App;
