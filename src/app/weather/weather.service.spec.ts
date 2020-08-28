import { TestBed } from '@angular/core/testing'

import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  let service: WeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService], // I added this one
    })
    service = TestBed.inject(WeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
