import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/comments/', commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>('http://Springangular-env.eba-pdfhyjc2.us-east-2.elasticbeanstalk.com/api/comments/by-user/' + name);
  }
}
