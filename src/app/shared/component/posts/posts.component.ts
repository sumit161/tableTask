import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor() {}
 @Input() postchild!:Ipost//Array<Ipost>//

   ngOnInit(): void {
    // console.log(this.postchild)
   }
}
