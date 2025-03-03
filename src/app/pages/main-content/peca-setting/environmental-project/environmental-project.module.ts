import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentalProjectRoutingModule } from './environmental-project-routing.module';
import { MainFormComponent } from './main-form/main-form.component';
import { ObjectiveFormComponent } from './objective-form/objective-form.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import { EnvironmentalProjectComponent } from './environmental-project.component';
import { NbCardModule
    , NbRadioModule
    , NbAlertModule
    , NbIconModule
    , NbButtonModule
    , NbListModule
    , NbAccordionModule
    , NbCheckboxModule
    , NbInputModule,
    NbTooltipModule} from '@nebular/theme';
import { ReactiveInputModule } from 'src/app/pages/_components/form-components/reactive-input/reactive-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormComponent } from './topics-form/form/form.component';
import { LevelsFormComponent } from './levels-form/levels-form.component';
import { ReactiveDatepickerModule } from 'src/app/pages/_components/form-components/reactive-datepicker/reactive-datepicker.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProgressModule } from 'src/app/pages/_components/shared/progress/progress.module';
import { ReactiveTextAreaModule } from 'src/app/pages/_components/form-components/reactive-text-area/reactive-text-area.module';


@NgModule({
  declarations: [
    MainFormComponent,
    ObjectiveFormComponent,
    TopicsFormComponent,
    EnvironmentalProjectComponent,
    ListItemsComponent,
    FormComponent,
    LevelsFormComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NbCardModule,
    ReactiveInputModule,
    ReactiveTextAreaModule,
    NbRadioModule,
    FormsModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveDatepickerModule,
    NbInputModule,
    NgSelectModule,
    ProgressModule,
    NbTooltipModule,
    NgxMaskModule.forRoot(),
    NbAccordionModule,
    NbListModule,
    NbIconModule,
    EnvironmentalProjectRoutingModule
  ]
})
export class EnvironmentalProjectModule { }
