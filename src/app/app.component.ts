import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
}
