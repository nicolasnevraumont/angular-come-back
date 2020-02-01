import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;
  selectedPost: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  view(post: Post) {
      this.selectedPost = post;
  }

  onDeleteNotify(post: Post) {
    this.postsService.delete(post);
    ;
  }

}
