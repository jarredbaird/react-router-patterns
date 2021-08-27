import React from "react";
import { Link, Redirect } from "react-router-dom";
import { DogProps } from "./interfaces";

const DogDetails: React.FC<{ dog: DogProps }> = ({ dog }) => {
  if (!dog) return <Redirect to="./dogs" />;
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name}></img>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;

export {};
