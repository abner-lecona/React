import "./movie.css";


const Movie = ({title, image, category}) => {
    return (
        <div>
          <ul>
          <img src={image} alt={title} className="movie_img"/>
          <div className="movie_title">{title}</div>
          <div className="movie_category">{category}</div>
          </ul>
        </div>
      );
};

export default Movie;
