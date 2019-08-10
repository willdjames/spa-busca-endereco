import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { CepFormComponent } from './modules/endereco/cep-form/cep-form.component';
import { EnderecoModule } from './modules/endereco/endereco.module';
import { HomeModule } from './modules/home/home.module';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'busca-endereco', component: CepFormComponent }
];

@NgModule({
    imports: [
        RouterModule,
        HomeModule,
        EnderecoModule,
        RouterModule.forRoot(rotas, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
