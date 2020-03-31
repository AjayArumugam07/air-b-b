import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'Heart of the city', 'https://cache.marriott.com/marriottassets/marriott/CAIMD/caimd-pool-2210-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*', 149.99),
    new Place('p2', 'Delhi Palace', 'Authentic Delhi Experience', 'https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/new-images/Facade%20-%20Taj%20Mahal,New%20Delhi%20-%20Master.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg', 49.99),
    new Place('p3', 'Ibis Hotel', 'Right on top of the mountain', 'https://www.ahstatic.com/photos/7484_ho_00_p_1024x768.jpg', 99.99)
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(place => place.id === id)};
  }

  constructor() { }
}
