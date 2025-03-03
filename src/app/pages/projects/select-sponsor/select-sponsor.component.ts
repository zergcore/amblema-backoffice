import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetSponsorUsers, SponsorUserState } from 'src/app/store/user/sponsor-user.action';
import { Observable } from 'rxjs';
import { SponsorUser } from 'src/app/_models/user/sponsor-user.model';
import { FormControl, AbstractControl } from '@angular/forms';
import { ProjectState } from 'src/app/store/project.action';
import { Project } from 'src/app/_models/project.model';
import { ACTION } from 'src/app/_helpers/text-content/text-crud';

@Component({
  selector: 'app-select-sponsor',
  templateUrl: './select-sponsor.component.html',
  styleUrls: ['./select-sponsor.component.scss']
})
export class SelectSponsorComponent implements OnInit, OnChanges {
  @Select( SponsorUserState.sponsorUsers ) sponsorUsers$: Observable<SponsorUser[]>;
  @Select( ProjectState.project ) project$: Observable<Project>;

  @Input() control: AbstractControl | null = new FormControl();
  @Input() submitted: boolean;
  @Input() mode: string;

  selectedSponsor;

  constructor(
    private store: Store
  ) {
    store.dispatch( new GetSponsorUsers() );
  }

  ngOnInit(): void {

    this.selectedSponsor = this.control.value;

  }

  ngOnChanges(): void {
    this.selectedSponsor = this.control.value ? this.selectedSponsor : null;
    if ( this.mode === ACTION.EDIT  ) {
      this.project$.subscribe( (response: any) => {
        this.selectedSponsor = response.sponsor.name;
      });
    }
  }

  onSelected( event: any ) {
    this.control.setValue( event ? event.id : null );

    this.selectedSponsor = event ? event.name : null;
  }
}
