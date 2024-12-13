import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { TecnicosDeLaEmpresaService } from './servicios/tecnicos-de-la-empresa/tecnicos-de-la-empresa.service';


const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "ubicanos", component: UbicanosComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "tecnicos-de-la-empresa", component: TecnicosDeLaEmpresaService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
