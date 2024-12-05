/// <reference types="@types/google.maps" />
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

declare var google: any;  // Declaración de `google`

@Component({
    selector: 'app-acerca',
    templateUrl: './acerca.page.html',
    styleUrls: ['./acerca.page.scss'],
    standalone: false
})
export class AcercaPage implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map!: google.maps.Map;

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const center = { lat: 24.886, lng: -70.268 };
    const mapOptions = {
      center: center,
      zoom: 4,
      disableDefaultUI: true,
      zoomControl: true,
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    const marker = new google.maps.Marker({
      position: center,
      map: this.map,
      title: "Ubicación seleccionada",
    });
  }
}
