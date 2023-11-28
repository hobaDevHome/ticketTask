import { Component, OnInit } from '@angular/core';

interface Date {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dropdown2',
  templateUrl: './dropdown2.component.html',
  styleUrl: './dropdown2.component.css',
})
export class DropdownComponent2 implements OnInit {
  dates: Date[] | undefined;

  selectedDate: Date | undefined;

  ngOnInit() {
    this.dates = [
      { name: '05 يونيو, 2023 - 05 أغسطس , 2023', code: 'Y' },
      { name: '06 يونيو, 2023 - 06 أغسطس , 2023', code: 'Y' },
      { name: '07 يونيو, 2023 - 07 أغسطس , 2023', code: 'Y' },
    ];
  }
}
