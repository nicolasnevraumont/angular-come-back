import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;
  @Output() deleteNotify = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteNotify.emit(this.post);
  }

}
