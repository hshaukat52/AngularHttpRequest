import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent {
  searchData= new FormGroup({
    city: new FormControl(''),
    checkIn: new FormControl(''),
    checkOut: new FormControl(''),
    rooms: new FormControl('')
  });

  constructor(private http:HttpClient){

  }
  Search(){
    console.log(this.searchData.value);
    this.http.get('https://localhost:44351/WeatherForecast').subscribe(responseData=>{
      console.log(responseData);
    })
  }
}
