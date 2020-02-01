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

  constructor(private http: HttpClient ) { }

  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.resourceUrl)
  }
}
