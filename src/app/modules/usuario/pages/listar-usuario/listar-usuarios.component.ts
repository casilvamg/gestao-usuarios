import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Usuario } from "../../models/usuario.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.scss"],
})
export class ListarUsuariosComponent {
  @Input() usuarios: Usuario[] | null = [];
  @Output() usuarioParaEditar = new EventEmitter<Usuario>();

  constructor(private usuarioService: UsuarioService) {}

  removerUsuario(cpf: string): void {
    if (confirm("Tem certeza que deseja remover este usuário?")) {
      this.usuarioService.removerUsuario(cpf);
    }
  }

  editarUsuario(cpf: string): void {
    const usuario = this.usuarios?.find((u) => u.cpf === cpf);
    if (usuario) {
      this.usuarioParaEditar.emit(usuario);
    }
  }
}
