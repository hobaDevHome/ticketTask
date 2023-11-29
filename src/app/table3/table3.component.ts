import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/users';
import { UserData } from '../../service/userData';
import { TablePageEvent } from 'primeng/table';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrl: './table3.component.css',
})
export class Table3Component implements OnInit {
  users!: User[];

  selectedUser!: User[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  first = 0;

  rows = 10;

  constructor(private userdata: UserData) {}

  ngOnInit() {
    this.userdata.getCustomersMedium().then((customers) => {
      this.users = customers;
      this.loading = false;

      this.users.forEach(
        (customer) => (customer.date = new Date(<Date>customer.date))
      );
    });
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }
  pageChange(event: TablePageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.users ? this.first === this.users.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }
}
