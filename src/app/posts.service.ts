import { HttpClient, HttpEventType } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Post } from './post.model';
import {map, catchError, tap} from 'rxjs/operators';
import {Subject,throwError} from 'rxjs';

@Injectable ({
    providedIn:'root'
})

export class PostService{
    error = new Subject<string>();
    constructor( private http:HttpClient){

    }
    createAndStorePost(title:string, content:string){
        const postData: Post={title:title, content:content}
        this.http.post<{name:string}>('https://testingbackene-default-rtdb.firebaseio.com/posts.json',postData
        ,{  
            observe: 'response',
            responseType: 'json'
        })
        .subscribe(
            responsedata=>{
              console.log(responsedata); 
            },error=>{
                this.error.next(error.message);
            }
        );
          
    }
    fetchPost(){
        return this.http.get<{[key:string]:Post}>('https://testingbackene-default-rtdb.firebaseio.com/posts.json')
        .pipe(map(responseData=>{
          const postArray=[];
          for(const key in responseData)
          {
            //console.log(responseData);
            if(responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key as keyof typeof responseData], id: key });
            }
          }
          return postArray;
        }),
        catchError(errorRes=>{
            return throwError(errorRes);
        })
        )        
    }
    clearPost(){
        return this.http.delete('https://testingbackene-default-rtdb.firebaseio.com/posts.json',{
          observe: 'events'
        })
        .pipe(tap(event=>{
          console.log(event);
          if(event.type === HttpEventType.Sent)
          {

          }
          if(event.type === HttpEventType.Response )
          {
            console.log(event.body);
          }
        })); 
    }
}
