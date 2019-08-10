import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {

  cepDigitado: string;

  constructor() { }

  ngOnInit() {
  }

  capturacepDigitado(evento: string): void {
    this.cepDigitado = evento;
  }

}
