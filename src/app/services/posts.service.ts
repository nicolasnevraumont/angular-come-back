import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private resourceUrl = 'https://jsonplaceholder.typicode.com/posts';

  private posts: Array<Post> = [];

  constructor(private httpClient: HttpClient ) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.resourceUrl);
  }

  delete(post: Post) {
    this.httpClient.delete(`${this.resourceUrl}/${post.id}`).subscribe();
  }
}
