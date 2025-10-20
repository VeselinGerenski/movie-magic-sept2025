import { v4 as uuid } from "uuid";

const movies = [
    {
        _id: 'a3582672-0ee4-1284-8759-35ee253329zv',
        title: 'Jungle Cruise',
        genre: 'Adventure',
        description: 'dwadwadwadawdwadawda',
        imageUrl: '/img/jungle-cruise.jpeg',
        director: 'Jaume Collet - Serra',
        year: '2021',
        rating: '6.6',
        category: 'movie',
    },
    {
        _id: 'z2682672-0ee4-1534-8759-35ee253329ty',
        title: 'Man on Steel',
        genre: 'Superhero',
        description: 'An alien...3232233232323232',
        imageUrl: 'https://www.usatoday.com/gcdn/media/USATODAY/GenericImages/2013/06/12/1371055927000-AP-FILM-REVIEW-MAN-OF-STEEL-56426827-1306121255_3_4.JPG',
        director: 'Zack Snyder',
        year: '2013',
        rating: '7.1',
        category: 'movie',
    },
    {
        _id: 'a3554372-0ee4-1284-8759-35ee253329zv',
        title: 'Home Alone',
        genre: 'Comedy',
        description: 'dwadwadwadawdwadawda',
        imageUrl: '/img/home-alone.jpeg',
        director: 'dwadwadaw',
        year: '2002',
        rating: '9.6',
        category: 'movie',
    },

];

export default class Movie {
    constructor(data) {
        Object.assign(this, data);

        this._id = uuid();
    }

    static find(filter = {}) {
        let result = movies.slice();

        //TODO Filter
        if (filter._id) {
            result = movies.filter(movie => movie._id === filter._id);
        }

        if (filter.title) {
            // TODO Search by title, partial match, case insensitive 
        }

        if (filter.genre) {
            // TODO Search by genre, exact match, case insensitive 

            result = result.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase());
        }

        if (filter.year) {
            result = result.filter(movie => movie.year === filter.year);
        }

        return result;
    }
    static findOne(filter = {}) {
        let result = movies[0];

        if (filter._id) {
            result = movies.find(movie => movie._id === filter._id);
        };

        return result;
    }

    get id() {
        return this._id;
    }

    save() {
        movies.push(this);

        console.log(movies);

        return this;
    }
};

