import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Munich', 'DE')
      .subscribe((data) => (this.current = data))
  }
}

/*
//template: ` <p>current weather works!</p> `,
// .getCurrentWeather('El Jadida', 'MA')

  constructor() {
    this.current = {
      city: 'El Jadida',
      country: 'Morocco',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 26,
      description: 'sunny',
    } as ICurrentWeather
  }
*/
