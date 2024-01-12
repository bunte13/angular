import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver } from '../module/klasa';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./driver.component.html' , // mestoto so koe se povrzuva
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  @Input()
  vozac:Driver = {} as Driver;

  @Input()
  ime: String = "";

  @Input()
  reden : Number = 0;

  @Output()
  shofer:Driver = {} as Driver
  
  cuci = new EventEmitter<any>();

  klasi(){
    return {'poz':this.vozac.category === "BEGINNER" && this.vozac.zanimanje === "pilot"  && this.vozac.id %2 == 0,'noz':this.vozac.category === "ADVANCED", //ova go pravime so ngClass i kje se ni iskochi samo ako e beginner?
    'course-card':true};
   }
   
   getColor() {
    if(this.vozac.points > 310) {
      return 'blue';
    }
    return 'orange';
  }
  getDecoration() {
    if(this.vozac.points <=300) {
      return 'underline';
    }
    return 'bold'
  }
   
  klik(){
    var link = this.vozac.iconUrl;
    window.open(link);
    console.log("me klikna");
    this.cuci.emit(this.vozac);

  }
}
