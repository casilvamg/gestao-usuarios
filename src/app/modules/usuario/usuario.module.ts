import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CadastroUsuarioComponent } from "./pages/cadastro-usuario/cadastro-usuario.component";
import { ListarUsuariosComponent } from "./pages/listar-usuario/listar-usuarios.component";
import { CadastroUsuarioContainerComponent } from "./pages/cadastro-usuario/cadastro-usuario-container.component";
import { ListarUsuariosContainerComponent } from "./pages/listar-usuario/listar-usuarios-container.component";

@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListarUsuariosComponent,
    CadastroUsuarioContainerComponent,
    ListarUsuariosContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CadastroUsuarioComponent, ListarUsuariosComponent],
})
export class UsuarioModule {}
