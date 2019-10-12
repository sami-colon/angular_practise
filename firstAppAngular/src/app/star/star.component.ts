import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, AfterViewChecked{
  totalStars = 5;
  remStars = 0; remStarsArray;
  currentStars = 0; currentStarsArray;
  decimal = 0;
  @Input('rating') public rating;
  ngOnChanges() {
    this.currentStars = Math.floor(this.rating);
    this.currentStarsArray = Array(this.currentStars).fill(0);
    this.remStars =  this.totalStars - this.currentStars - 1;
    if (!(this.remStars < 0)) {
      this.remStarsArray = Array(this.remStars).fill(0);
    }
    this.decimal =  Math.ceil((this.rating - this.currentStars) * 100);
  }
  ngAfterViewChecked(): void {
    // console.log(this.decimal, this.rating);
    $('.gradientText').last().css({'background-image':'linear-gradient(to right, yellow '+this.decimal+'%, white '+this.decimal+'% '+100+'%)'});
  }
}
