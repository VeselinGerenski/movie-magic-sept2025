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

    static find() {
        return movies.slice();
    }
   
    get id(){
        return this._id;
    }

    save() {
       movies.push(this);
          
       console.log(movies);

       return this;
    }
};

