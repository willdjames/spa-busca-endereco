import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/shared/models/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  buscaEnderecoPara(cep: string): Observable<Endereco> {
    return this.httpClient
      .get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
