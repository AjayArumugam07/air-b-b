import { Component, OnInit, Query } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { NgModuleResolver } from '@angular/compiler';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router, private navCtrl: NavController, private modalCtrl: ModalController, private placesService: PlacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
      }

      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });

  }

  onBookPlace() {
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({component: CreateBookingComponent, 
      componentProps: {
        selectedPlace: this.place
      }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss()
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
    });
  }

}
