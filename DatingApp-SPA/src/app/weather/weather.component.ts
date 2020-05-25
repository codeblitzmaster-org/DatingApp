import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  values: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    this.http.get("http://localhost:5000/WeatherForecast").subscribe(r => {
      this.values = r;
    }, error => {console.log(error);});
  }

}
