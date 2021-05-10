import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  @Input() job = '';
  @Input() town = '';
  @Input() phoneNumber = '';
  @Input() email = '';
  @Input() portofolioLink = '';
  isDisplayed = false;

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isDisplayed = true;
  }
}
