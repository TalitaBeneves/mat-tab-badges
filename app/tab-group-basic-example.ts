import { Component, OnInit } from '@angular/core';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class TabGroupBasicExample implements OnInit {
  cars = [
    {
      color: 'purple',
      type: 'minivan',
      registration: new Date('2017-01-03'),
      capacity: 7,
    },
    {
      color: 'red',
      type: 'station wagon',
      registration: new Date('2018-03-03'),
      capacity: 5,
    },
  ];

  quantidade;
  teste;
  ngOnInit(): void {
    this.quantidade = this.cars.length;
  }

  tabIndex(e) {
    this.teste = e;
    if (e.index == 1) {
      this.quantidade = this.cars.length;
    }
    if (e.index == 0) {
      const nav = document.querySelector('.mat-badge-content');
      nav.remove();
    }
    console.log(e);
    //mat-badge-content mat-badge-active
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
