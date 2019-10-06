import { Component, OnInit } from '@angular/core';

import { UnitOfMeasurement } from '../../services/unit-of-measurement/unit-of-measurement';
import { UnitOfMeasurementService } from '../../services/unit-of-measurement/unit-of-measurement.service';

@Component({
  selector: 'app-unit-of-measurement',
  templateUrl: './unit-of-measurement.component.html',
  styleUrls: ['./unit-of-measurement.component.scss']
})
export class UnitOfMeasurementComponent implements OnInit {

  unitsOfMeasurement: UnitOfMeasurement[];

  constructor(private unitsOfMeasurementService: UnitOfMeasurementService) { }

  ngOnInit() {
    this.getUnitsOfMeasurement();
  }

  getUnitsOfMeasurement(): void {
    this.unitsOfMeasurementService.getUnitOfMeasurements()
    .subscribe(unitsOfMeasurement => this.unitsOfMeasurement = unitsOfMeasurement);
  }

}
