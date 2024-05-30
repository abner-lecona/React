import React from "react";
import Movie from "./Movie";
import "./row.css"
import { IMAGES_MOVIES } from "./movies.js";

const Row = () => {
  return (
    <div>
      <h2 className="subtitle">Continuar viendo</h2>
      <section> 
        <ul className="row">
          <Movie {...IMAGES_MOVIES[0]} />
          <Movie {...IMAGES_MOVIES[1]} />
          <Movie {...IMAGES_MOVIES[2]} />
          <Movie {...IMAGES_MOVIES[3]} />
          <Movie {...IMAGES_MOVIES[4]} />
          <Movie {...IMAGES_MOVIES[5]} />
          <Movie {...IMAGES_MOVIES[6]} />
        </ul>
      </section>
    </div>
  );
};

export default Row;
