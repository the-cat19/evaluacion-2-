import { Injectable } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ContactanosComponent } from '../../componentes/contactanos/contactanos.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TecnicosDeLaEmpresaService {
  backend = environment.backend+"/tecnicos_de_la_empresa";

  constructor(private http: HttpClient) { }

  
  obtenerProfesionales(){
    return this.http.get(`${this.backend}/profesionales`);
  }
}
