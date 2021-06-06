import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { weatherModel } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<weatherModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': environment.ANGULAR_API_KEY,
        'x-rapidapi-host': environment.ANGULAR_API_HOST
      })
    };
    return this.http.get<weatherModel>(this.baseUrl + '//current.json?q=' + city, httpOptions);
  }
}
