import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    trips
    isTripSelected: boolean = false
    tripSelected: object

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getAllTrips().subscribe(data => {
            console.log(data)
            this.trips = data
        })
    }

    updateTripSelected(trip) {
        if (this.tripSelected != trip || this.tripSelected == null) {
            this.isTripSelected = true
            this.tripSelected = trip
        } else {
            this.isTripSelected = false
            this.tripSelected = null
        }
        console.log(this.tripSelected)
    }

}
