import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Usuario } from "../../models/usuario.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-cadastro-usuario-container",
  template: `<app-cadastro-usuario
    [usuarioParaEditar]="usuarioParaEditar$ | async"
    (usuarioAdicionado)="onUsuarioAdicionado($event)"
  ></app-cadastro-usuario>`,
})
export class CadastroUsuarioContainerComponent implements OnInit, OnDestroy {
  usuarioParaEditar$ = this.usuarioService.getUsuarioParaEditar();
  private destroy$ = new Subject<void>();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Observable já gerencia o estado corretamente
  }

  ngOnDestroy(): void {
    // Limpar ao sair do componente
    this.usuarioService.limparUsuarioParaEditar();
    this.destroy$.next();
    this.destroy$.complete();
  }

  onUsuarioAdicionado(usuario: Usuario): void {
    const usuarioEditando = this.usuarioService.getUsuarioParaEditarValue();

    if (usuarioEditando) {
      this.usuarioService.editarUsuario(usuario);
    } else {
      this.usuarioService.adicionarUsuario(usuario);
    }

    this.usuarioService.limparUsuarioParaEditar();
    this.router.navigate(["/usuarios/listar"]);
  }
}
