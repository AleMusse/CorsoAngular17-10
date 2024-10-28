import { Component , Input, OnInit, Output, EventEmitter} from '@angular/core';

import { ICards } from '../interfaceObject/interfaceObject';

@Component({
  selector: 'app-dettail-card',
  templateUrl: './dettail-card.component.html',
  styleUrl: './dettail-card.component.css'
})
export class DettailCardComponent implements OnInit {
  @Input() detta2: ICards;
  @Output() Ciambella = new EventEmitter<ICards>();
  @Output() vaiPaginaIniziale = new EventEmitter<ICards>();
 indietro(){  
  this.vaiPaginaIniziale.emit(this.detta2)
 }
 delet(){
  this.Ciambella.emit(this.detta2)
  this.vaiPaginaIniziale.emit(this.detta2)

 
}




ngOnInit(): void {
    console.log(this.detta2.id)
}

} 
