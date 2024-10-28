import { Component,OnInit } from '@angular/core';
import { scarpe } from '../object/object';
import { ICards } from '../interfaceObject/interfaceObject';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  scarpe: Array<ICards> = scarpe;
  constructor() { }
  ngOnInit(): void {
console.log()
  
  }
  carteOff:boolean = true
  addy:boolean = true
  cioa:boolean = true
  
  deletS(idScarpa:number){
    const scarpu = this.scarpe.findIndex(scarpa => scarpa.id === idScarpa); 
    console.log(scarpu);
    if(scarpu !== -1){ this.scarpe.splice(scarpu, 1); }   
  }

 
  grut2:ICards
  passaDettagli(grut:ICards ){
   this.grut2 = grut;
   console.log(this.grut2);
    this.carteOff = !this.carteOff;
    this.cioa = !this.cioa
  }

  onBack(grut2:ICards):void{
    this.carteOff = true;
    this.cioa = !this.cioa
  }


  
  addy2(){
    this.addy = !this.addy; 
    this.cioa = !this.cioa;    
  }
  newaddy(){
    this.addy = true;
    this.cioa = !this.cioa
  }
  scarpa1:Array<ICards>
  scarpaAdd(scarpa1:ICards){
    this.scarpe.push(scarpa1);
  }
}
