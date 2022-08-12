import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[spaMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{

  @Input() corDeFundo: string = 'yellow';
  @Input() corDoTexto: string = 'white';

  constructor(private elemento: ElementRef) { }
  
  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo() {
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }
}
