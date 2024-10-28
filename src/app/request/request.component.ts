import { Component } from '@angular/core';
import { ItunesService } from '../services/itunes.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {

  request: string = '';
  data2: Array<any> = [];
  selectedValue: number = 8 ;
  quantita = [0,2,5,10,20];
  error:boolean = false;
  constructor(private itunesService: ItunesService) {}

 
 
  makeRequest(selectedValue: number) {
    
    this.itunesService.makeRequest(this.request, this.selectedValue).subscribe(
      {
        next: (data) => {
          (this.data2 = data.results);
          this.data2 = this.data2.slice(0, selectedValue);
        },
        error: (err) => {
          console.log(err), 
          this.error = true
        } ,
        complete: () => console.log('Completato'),

      }
    );
  }
}


