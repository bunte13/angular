import { Component } from '@angular/core';
import { DRIVERS } from 'src/Angular/db-data';
import { Driver } from './module/klasa';
import { DriverComponent } from './driver/driver.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,RouterOutlet,DriverComponent], // so ova ovozmozhuvame oderedeni "compnenti da integrirame vo kodot vo htmlot"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lol';

  vozaci = DRIVERS;
  maks = DRIVERS[1];
  checo = DRIVERS[2];
  lewis = DRIVERS[3];


  appklik(suzi : Driver){
    console.log("app e kliknat",suzi);
  }
}
