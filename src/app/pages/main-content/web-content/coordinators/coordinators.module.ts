import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorsRoutingModule } from './coordinators-routing.module';
import { NbCardModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';
import { CoordinatorsComponent } from './coordinators.component';
import { HelperModule } from '../_helpers/helper.module';
import { ReactiveSelectModule } from 'src/app/pages/_components/form-components/reactive-select/reactive-select.module';
import { ReactiveInputModule } from 'src/app/pages/_components/form-components/reactive-input/reactive-input.module';
import { ReactiveTextAreaModule } from 'src/app/pages/_components/form-components/reactive-text-area/reactive-text-area.module';
import { ReactiveInputFileModule } from 'src/app/pages/_components/form-components/reactive-input-file/reactive-input-file.module';
import { ProgressModule } from 'src/app/pages/_components/shared/progress/progress.module';

@NgModule({
  declarations: [
    CoordinatorsComponent
  ],
  imports: [
    CommonModule,
    CoordinatorsRoutingModule,
    NbCardModule,
    HelperModule,
    NbButtonModule,
    ProgressModule,
    NbSpinnerModule,

    // Add custom module
    ReactiveTextAreaModule,
    ReactiveInputModule,
    ReactiveSelectModule,
    ReactiveInputFileModule
  ]
})
export class CoordinatorsModule { }
