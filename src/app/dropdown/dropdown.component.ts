import { Component, OnInit } from '@angular/core';

interface Time {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent implements OnInit {
  times: Time[] | undefined;

  selectedCity: Time | undefined;

  ngOnInit() {
    this.times = [
      { name: 'سنويا', code: 'Y' },
      { name: 'شهريا', code: 'M' },
      { name: 'يوميا', code: 'D' },
    ];
  }
}
