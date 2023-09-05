import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {Subscription} from 'rxjs';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/posts.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css'],
})
export class ApiComponentComponent {
  loadedPosts: Post[]=[]
  isFetching= false;
  error=null;
  errorSub:Subscription;

  constructor(private http:HttpClient, private postService:PostService){

  }
  

  ngOnInit(){
    this.errorSub= this.postService.error.subscribe(errorMesssage=>{
      this.error= errorMesssage;
    })
    this.isFetching=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false; 
      this.loadedPosts=posts;
    }, error=> {
      this.isFetching=false;
      this.error= error.message;
    });
  }

  onCreatePost(postData:Post){
    this.postService.createAndStorePost(postData.title, postData.content); 
  }
  onFetchPosts(){
    this.isFetching=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false; 
      this.loadedPosts=posts;
    }, error=> {
      this.isFetching=false;
      this.error= error.message;
    });
  }
  onClearPosts(){
    this.postService.clearPost().subscribe(()=>{
      this.loadedPosts=[];
    })
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
  onHandleError(){
    this.error=null;
  }
}
