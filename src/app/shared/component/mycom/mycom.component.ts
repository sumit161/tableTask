import { Component, Input, OnInit } from '@angular/core';
import { Iusers } from '../../model/post';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.scss']
})
export class MycomComponent implements OnInit {
 @Input() childesh!:Iusers
  constructor() { }

  ngOnInit(): void {
  }

}
