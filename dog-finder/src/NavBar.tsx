import React from "react";
import { DogProps } from "./interfaces";
import { NavLink } from "react-router-dom";

const NavBar: React.FC<{ dogs: DogProps[] }> = ({ dogs }) => {
  const dogLinks = dogs.map((dog) => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogLinks}
    </nav>
  );
};

export default NavBar;
