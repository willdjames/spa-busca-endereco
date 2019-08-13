import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CepFormComponent } from './cep-form/cep-form.component';

@NgModule({
  declarations: [CepFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CepFormComponent]
})
export class EnderecoModule { }
