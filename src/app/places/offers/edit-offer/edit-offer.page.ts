import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;

  constructor(private router: Router, private placesService: PlacesService, private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/offers');
      }

      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })
  }

}
