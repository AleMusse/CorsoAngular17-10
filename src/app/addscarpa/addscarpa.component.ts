import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { scarpe } from '../object/object';
import { NgForm } from '@angular/forms';
import { ICards } from '../interfaceObject/interfaceObject';

@Component({
  selector: 'app-addscarpa',
  templateUrl: './addscarpa.component.html',
  styleUrl: './addscarpa.component.css',
})
export class AddscarpaComponent implements OnInit {
  @Input() addyy: boolean;

  @Output() compaddyy = new EventEmitter();

  addy3() {
    this.addyy = !this.addyy;
    this.compaddyy.emit(this.addyy);
  }
  urlPattern: any =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

  @Output() addScarpa = new EventEmitter<ICards>();
  taglie: Array<number> = [38, 39, 40, 41, 42, 43, 44, 45];
  colori: Array<string> = ['blue', 'green', 'yellow'];
  quantitaScarpe: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //  myForm: Array<ICards>
  id: number;
  nome: string;
  taglia: number;
  prezzo: number;
  colore: string;
  foto: string;
  quantita: number;

  addForm(form: NgForm) {

    if (form.valid) {
      const scarpa = {
        id: this.calcolaMaxId(scarpe) + 1,
        nome: form.value.nome,
        taglia: form.value.taglia,
        prezzo: form.value.prezzo,
        colore: form.value.colore,
        foto: form.value.foto,
        quantita: form.value.quantita,
      };

      console.log(scarpa);
      this.addScarpa.emit(scarpa);

      console.log(form.value);
    } else {
      console.log('Il form contiene errori.');

    }

    //  }
  }

  ngOnInit(): void {}

  calcolaMaxId(corsi: ICards[]) {
    let max = 0; 
    corsi.forEach(
      (element) => {
        if (element.id > max) max = element.id;
      }
    );
    return max;
  }
}
