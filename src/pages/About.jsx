import React, { useEffect, useState } from "react";
import "./About.css";
import Header from "../components/Header";

function About() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      });
  }, []);

  function handleImageLoad(id) {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  }
  return (
    <div>
      <Header></Header>
      <div className="Cards">
        {loading ? (
          <p>Loading...</p>
        ) : (
          photos.map((photo) => (
            <div key={photo.id} className="Card">
              {!loadedImages[photo.id] && <p>Loading image...</p>}
              <img
                src={photo.url}
                alt={photo.title}
                onLoad={() => handleImageLoad(photo.id)}
                style={{ display: loadedImages[photo.id] ? "block" : "none" }}
              />
              <h2>{photo.title}</h2>
              <h2>Price: ${photo.id}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default About;
