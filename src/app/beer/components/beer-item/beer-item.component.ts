import { Component, Input } from '@angular/core';
import { Beer } from '../../models';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent {
  @Input() beer: Beer;
  placeholder = '/assets/images/beer-placeholder.png';
}
