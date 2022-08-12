import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count: number = 0;
  text = '';
  nome = 'Gabriel R. S.'


  constructor(){}
  
  ngOnInit(): void {

    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome:string): void {
    console.log(nome+' clicou');
  }
}
