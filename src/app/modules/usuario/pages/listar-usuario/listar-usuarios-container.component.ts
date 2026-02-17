import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../models/usuario.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-listar-usuarios-container",
  template: `<app-listar-usuarios
    [usuarios]="usuarios$ | async"
    (usuarioParaEditar)="onEditarUsuario($event)"
  ></app-listar-usuarios>`,
})
export class ListarUsuariosContainerComponent {
  usuarios$ = this.usuarioService.getUsuarios();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  onEditarUsuario(usuario: Usuario): void {
    this.usuarioService.definirUsuarioParaEditar(usuario);
    this.router.navigate(["/usuarios/cadastro"]);
  }
}
