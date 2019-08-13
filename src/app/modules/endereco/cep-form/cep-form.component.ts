import { Component, OnInit } from '@angular/core';
import { ViaCepService } from 'src/app/core/services/viaCep/via-cep-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {

  cepDigitado: string;

  cepForm: FormGroup;

  constructor(
    private viaCepService: ViaCepService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    this.cepForm = this.formBuilder.group({
      first: ['', Validators.required]
    });
  }

  capturaCepDigitado(cep: string): void {
    this.cepDigitado = cep;
  }

  buscaEndereco(): void {
    const cep = this.cepForm.get('first').value;

    this.viaCepService.buscaEnderecoPara(cep)
      .subscribe(
        endereco => console.log(endereco),
        err => console.error(err)
      );
  }

}
