/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 *TASK-JS-Classes-basics'
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here
  // firstName;
  //// lastName;
  //ginder;
  //birthYear;
  //currentYear;
  //fullName;
  //Age;
  firstName;
  grade = "";

  constructor(firstName, lastName, ginder, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ginder = ginder;
    this.birthYear = birthYear;
  }

  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }

  age(currentYear) {
    let Age = currentYear - this.birthYear;

    return Age;
  }

  //console.log (fullName);
  //return Age;
}

member1 = new Person("Noura", "Alhamdan", "Female", 1986);
console.log(member1.age(2023));
member1.fullName();
member2 = new Person("Sara", "Alhamdan", "Female", 2008);
console.log(member2);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here

  rating = [];

  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }

  addRating = (rate) => {
    if (rate > 0 && rate <= 10) {
      this.rating.push(rate);
    }
  };

  averageRating = () => {
    let sum = 0;
    this.rating.forEach((rate) => (sum += rate));
    return sum / this.rating.length;
    //foreach is a for loop
  };
  //       movie.filter (rating) => {
  //         const sum = rating.reduce(add, 0);

  // function add(accumulator, a) {
  //   return accumulator + a;
  // }

  //       }

  //     }

  //    }
}

let movie1 = new Movie("coded", 120, "action");
movie1.addRating(10);
movie1.addRating(10);
movie1.addRating(9);
movie1.addRating(9);
console.log(movie1.rating);
console.log(movie1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];

  addMovie = (movie) => {
    this.movies.push(movie);
  };
}

let actor1 = new Actor();
actor1.addMovie("SOUL");
actor1.addMovie("sky");
console.log(actor1.movies);
