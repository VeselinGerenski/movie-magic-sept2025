import Movie from '../models/Movie.js';

export default {
    getAll() {
        return Movie.find();
    },
    getOne(movieId){
        return Movie.findOne({_id: movieId});
    },
    create(movieData){
       //Create movie
        const movie = new Movie(movieData);
  
        return movie.save();
    }
}
