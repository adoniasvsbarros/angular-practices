import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Observable, Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    return this.http
      .post<{ name: string }>(
        "https://angular-basics-8bdae.firebaseio.com//posts.json",
        postData,
        {
          observe: "response",
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData.body);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "cust");

    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-basics-8bdae.firebaseio.com//posts.json",
        {
          headers: new HttpHeaders({
            "Custom-Header": "Hello",
          }),
          params: searchParams,
          responseType: "json",
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<any> {
    return this.http
      .delete(`https://angular-basics-8bdae.firebaseio.com//posts.json/`, {
        observe: "events",
        responseType: "json",
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
          if (event.type === HttpEventType.Sent) {
            console.log(event);
          }
        })
      );
  }
}
