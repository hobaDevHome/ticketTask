import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  getData() {
    return [
      {
        id: 1,
        name: 'أحمد محمود',

        mobile: '0123456789',
        ticket: 'C-101',
        price: 20,
        cenima:
          'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برح العرب',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: '',
      },
      {
        id: 2,
        name: 'محمد الغريب',

        mobile: '0123456789',
        ticket: 'C-102',
        price: 5,
        cenima:
          'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برح العرب',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
      {
        id: 3,
        name: 'محمد الغريب',

        mobile: '0123456789',
        ticket: 'C-103',
        price: 20,
        cenima: 'مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar2.png',
      },
      {
        id: 4,
        name: 'محمد الغريب',

        mobile: '0123456789',
        ticket: 'C-104',
        price: 45,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar2.png',
      },
      {
        id: 5,
        name: 'محمد الغريب',

        mobile: '0123456789',
        ticket: 'C-105',
        price: 17,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: '',
      },
      {
        id: 6,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-106',
        price: 150,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
      {
        id: 7,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-107',
        price: 30,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
      {
        id: 1,
        name: 'أحمد محمود',

        mobile: '0123456789',
        ticket: 'C-101',
        price: 20,
        cenima:
          'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برح العرب',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: '',
      },
      {
        id: 2,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-102',
        price: 5,
        cenima:
          'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برح العرب',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
      {
        id: 3,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-103',
        price: 20,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar2.png',
      },
      {
        id: 4,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-104',
        price: 45,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar2.png',
      },
      {
        id: 5,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-105',
        price: 17,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar2.png',
      },
      {
        id: 6,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-106',
        price: 150,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
      {
        id: 7,
        name: 'Lenna Paprocki',

        mobile: '0123456789',
        ticket: 'C-107',
        price: 30,
        cenima: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
        activity: 37,
        persons: 1,
        purchaesCount: 'مرة واحدة',
        image: 'avatar1.png',
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }
}
