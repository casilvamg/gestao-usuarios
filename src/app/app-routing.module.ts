import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroUsuarioContainerComponent } from "./modules/usuario/pages/cadastro-usuario/cadastro-usuario-container.component";
import { ListarUsuariosContainerComponent } from "./modules/usuario/pages/listar-usuario/listar-usuarios-container.component";

const routes: Routes = [
  { path: "", redirectTo: "usuarios/listar", pathMatch: "full" },
  { path: "usuarios/listar", component: ListarUsuariosContainerComponent },
  { path: "usuarios/cadastro", component: CadastroUsuarioContainerComponent },
  { path: "**", redirectTo: "usuarios/listar" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
