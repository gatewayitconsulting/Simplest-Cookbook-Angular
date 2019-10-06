import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UnitOfMeasurement } from './unit-of-measurement';
import { UNITSOFMEASUREMENT } from '../../data/unit-of-measurement/mock-units-of-measurement';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasurementService {

  constructor(private messageService: MessageService) { }

  getUnitOfMeasurements(): Observable<UnitOfMeasurement[]> {
    this.messageService.add('UnitOfMeasurementService: fetched unitOfMeasurements');
    return of(UNITSOFMEASUREMENT);
  }

  getUnitOfMeasurement(id: number): Observable<UnitOfMeasurement> {
    this.messageService.add(`UnitOfMeasurementService: fetched unitOfMeasurement id=${id}`);
    return of(UNITSOFMEASUREMENT.find(unitOfMeasurement => unitOfMeasurement.id === id));
  }
}
