import { style } from '@angular/animations';
import { Component, Type } from '@angular/core';
@Component({
  selector: 'app-property-card',
  //template: `<h1>Hello Real Estate World App...</h1>`,
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight:normal; color:purple; }'],
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  property: any = {
    Id: 1001,
    price: '12000',
    proptype: 'House',
  };
}
