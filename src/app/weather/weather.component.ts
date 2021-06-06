import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  responseLoaded: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  async getWeather(city: string) {
    if (city != "") {
      this.responseLoaded = false;
      await this.weatherService.getWeather(city).toPromise().then(res => {
        this.responseLoaded = true;
        this.weatherData = res;
      });

      // this.weatherService.getWeather(city).subscribe(data => {
      //   console.log(data);
      // });
    }
  }

}
