import React from "react";
import { useParams } from "react-router-dom";
import { DogParam } from "./interfaces";
import DogDetails from "./DogDetails";

const FindDogDetails: React.FC<{ dogs: any[] }> = ({ dogs }) => {
  const { name } = useParams<DogParam>();

  if (name) {
    const foundDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={foundDog} />;
  }
  return null;
};

export default FindDogDetails;
