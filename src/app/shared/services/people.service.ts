import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Luisito',
        lastName: 'Suarez',
        age: 34,
      },
      {
        firstName: 'Jonathan',
        lastName: 'Calleri',
        age: 29,
      },
      {
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 35,
      },
      {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 37,
      }
    ]
    return of(peopleArray);
  }

  
}
