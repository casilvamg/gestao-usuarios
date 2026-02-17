import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroUsuarioContainerComponent } from "./pages/cadastro-usuario/cadastro-usuario-container.component";
import { ListarUsuariosContainerComponent } from "./pages/listar-usuario/listar-usuarios-container.component";

const routes: Routes = [
  { path: "", redirectTo: "listar", pathMatch: "full" },
  { path: "listar", component: ListarUsuariosContainerComponent },
  { path: "cadastro", component: CadastroUsuarioContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
