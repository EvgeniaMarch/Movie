type Movie = {
  id: string;
  titleText: {
    text: string;
  };
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
    };
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
  };
};

export default Movie;
