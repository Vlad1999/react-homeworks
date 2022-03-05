import "./ImageFrame.css";
import loadingIamge from "../../assests/images/loading.gif"
import { useEffect, useState } from "react";

function BreedSelectForm({ breed }) {
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url;

    if (breed) {
      if (breed.length > 1) {
        url = `https://dog.ceo/api/breed/${breed[0]}/${breed[1]}/images/random`;
      } else {
        url = `https://dog.ceo/api/breed/${breed[0]}/images/random`;
      }
      fetch(url)
        .then((res) => res.json())
        .then(
          (image) => {
            setIsLoading(true);
            setImage(image.message);
          },
          (error) => {
            setIsLoading(true);
            setError(error);
          }
        );
    }
  }, [breed]);

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  } else if (!isLoading) {
    return (
      <div className="loading">
        <img src={loadingIamge} alt="" />
      </div>
    );
  } else {
    return (
      <div className="frame">
        <img src={image} alt={breed} />
      </div>
    );
  }
}

export default BreedSelectForm;
