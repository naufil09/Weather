import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location = { country: "", lat: 0, localtime: "", lon: 0, name: "", region: "" };
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  async getWeather(city: string) {
    if (city != "") {
      await this.weatherService.getWeather(city).toPromise().then(res => {
        console.log(res);
        this.location = {
          country: res.location.country,
          lat: res.location.lat,
          localtime: res.location.localtime,
          lon: res.location.lon,
          name: res.location.name,
          region: res.location.region
        }
      });

      // this.weatherService.getWeather(city).subscribe(data => {
      //   console.log(data);
      // });
    }
  }

}
