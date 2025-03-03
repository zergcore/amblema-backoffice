import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';
import { AbstractReactive } from '../../abstract-reactive';
import { Validators } from '@angular/forms';
import { FileValidator, EXTENSIONS } from '../../../shared/file-validator';
import { CustomToastrService } from 'src/app/services/helper/custom-toastr.service';

@Component({
  selector: 'app-input-file',
  template: `
    <div class="form-group" *ngIf="control">
      <button
        nbButton
        [ngClass]="{ 'mb-3': !control.value && submitted }"
        outline
        status="info"
        class="js-labelFile"
      >
        <input
          type="file"
          [name]="id"
          [id]="id"
          (change)="handleUpload($event.target.files)"
          class="input-file"
        />
        <nb-icon icon="file-text-outline" class="mr-2"></nb-icon>
        <span *ngIf="!control.value" class="js-fileName">Adjuntar archivo</span>
        <span *ngIf="control.value" class="js-fileName"
          >Archivo seleccionado...</span
        >
      </button>

      <nb-alert outline="info" *ngIf="control.value" class="mt-3">
        <a *ngIf="url" [href]="url">{{ nameFile }}</a>
        <span *ngIf="!url">{{ nameFile }}</span>
      </nb-alert>

      <app-reactive-validation
        [patternMessage]="patternMsg"
        [validationErrors]="validationErrors"
      ></app-reactive-validation>
      <nb-alert status="danger" *ngIf="control.errors && submitted" class="mt-3"
        >Las extensiones validas son: pdf, docx y pptx
      </nb-alert>
    </div>
  `,
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent
  extends AbstractReactive
  implements AfterViewInit, OnChanges {
  nameFile: string;
  url: string = null;

  constructor(
    private toast: CustomToastrService,
    private cd: ChangeDetectorRef
  ) {
    super();
  }

  ngOnChanges(): void {
    if (this.control) {
      if (this.control.value !== null) {
        if (
          typeof this.control.value.url === 'string' ||
          this.control.value.url instanceof String
        ) {
          this.url = this.control.value.url;
          this.nameFile = this.control.value.name;
          this.control.setValidators([Validators.required]);
          this.control.updateValueAndValidity();
        } else {
          this.url = null;

          this.control.setValidators([
            Validators.required,
            FileValidator.fileExtensions(EXTENSIONS),
          ]);
          this.control.updateValueAndValidity();
        }
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.setValidators([
        Validators.required,
        FileValidator.fileExtensions(EXTENSIONS),
      ]);
      this.control.updateValueAndValidity();
      this.cd.detectChanges();
    }
  }

  handleUpload(event: any) {
    // Get file
    const file = event[0];

    // Instance reader
    const reader = new FileReader();

    // Get file's size on bytes, convert to Kb
    const size = event[0].size / 1000;

    if (size <= 1024) {
      this.control.setValue(event[0] as File);
      this.nameFile = event[0].name;
    } else {
      this.toast.error('Error de peso', 'El archivo debe pesar máximo 1 mb');
      this.control.setValue(null);
      this.nameFile = null;
    }
  }
}
