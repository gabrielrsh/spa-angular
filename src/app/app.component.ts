import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count: number = 0;
  text = '';
  nome = 'Gabriel R. S.'

  pessoas = [
    {
      nome: "Luisito",
      sobrenome: "Suarez"
    },
    {
      nome: "Jonathan",
      sobrenome: "Calleri"
    },
    {
      nome: "Lionel",
      sobrenome: "Messi"
    },
    {
      nome: "Cristiano",
      sobrenome: "Ronaldo"
    },
  ];


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
