import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hrdina } from '../hrdina';
import { HRDINOVIA } from '../viac-hrdinov';

@Component({
  selector: 'app-hrdina',
  templateUrl: './hrdina.component.html',
  styleUrls: ['./hrdina.component.css']
})
export class HrdinaComponent implements OnInit {

  hrdina: Hrdina = {
    id: 1,
    meno: 'ABC'
  };
  constructor() { }

  ngOnInit() {
  }

}