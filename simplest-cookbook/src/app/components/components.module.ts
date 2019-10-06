import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { RouterModule } from '@angular/router';

import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { UnitOfMeasurementComponent } from './unit-of-measurement/unit-of-measurement.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NouisliderModule,
        TagInputModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        FormsModule,
        NgxGalleryModule
    ],
    declarations: [
        ComponentsComponent,
        NucleoiconsComponent,
        UnitOfMeasurementComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
