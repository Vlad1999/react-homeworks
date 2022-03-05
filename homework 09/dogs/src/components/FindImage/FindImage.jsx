import { useState } from "react";
import ImageFrame from "../ImageFrame/ImageFrame";
import BreedSelectForm from "../BreedSelectForm/BreedSelectForm";

function FindImage() {
  const [breed, setBreed] = useState("");

  const getImage = (e) => {
    let breed = e.target.value.split("-")
      ? e.target.value.split("-")
      : e.target.value;
    setBreed(breed);
  };

  if (!breed) {
    return <BreedSelectForm breed={breed} getImage={getImage} />;
  } else {
    return (
      <>
        <BreedSelectForm breed={breed} getImage={getImage} />
        <ImageFrame breed={breed} />
      </>
    );
  }
}

export default FindImage;
