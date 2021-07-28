import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/posts/');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/posts/', postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/posts/by-user/' + name);
  }
}
