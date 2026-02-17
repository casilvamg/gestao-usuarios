import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private usuarios$ = new BehaviorSubject<Usuario[]>([]);
  private usuarioParaEditar$ = new BehaviorSubject<Usuario | null>(null);

  constructor() {
    // Inicializar com dados de exemplo (pode vir de uma API)
    const usuariosIniciais = [
      new Usuario("João Silva", "joao@email.com", "11987654321", "12345678901"),
      new Usuario(
        "Maria Santos",
        "maria@email.com",
        "11987654322",
        "12345678902",
      ),
      new Usuario(
        "Carlos Alberto",
        "carlos@email.com",
        "11987654323",
        "12345678903",
      ),
    ];
    this.usuarios$.next(usuariosIniciais);
  }

  // Observable dos usuários
  getUsuarios(): Observable<Usuario[]> {
    return this.usuarios$.asObservable();
  }

  // Observable do usuário para editar
  getUsuarioParaEditar(): Observable<Usuario | null> {
    return this.usuarioParaEditar$.asObservable();
  }

  // Adicionar novo usuário
  adicionarUsuario(usuario: Usuario): void {
    const usuariosAtuais = this.usuarios$.value;
    this.usuarios$.next([...usuariosAtuais, usuario]);
  }

  // Editar usuário existente
  editarUsuario(usuario: Usuario): void {
    const usuariosAtuais = this.usuarios$.value;
    const index = usuariosAtuais.findIndex((u) => u.cpf === usuario.cpf);
    if (index > -1) {
      usuariosAtuais[index] = usuario;
      this.usuarios$.next([...usuariosAtuais]);
    }
  }

  // Remover usuário
  removerUsuario(cpf: string): void {
    const usuariosAtuais = this.usuarios$.value;
    const usuariosFiltrados = usuariosAtuais.filter((u) => u.cpf !== cpf);
    this.usuarios$.next(usuariosFiltrados);
  }

  // Definir usuário para edição
  definirUsuarioParaEditar(usuario: Usuario | null): void {
    this.usuarioParaEditar$.next(usuario);
  }

  // Limpar usuário de edição
  limparUsuarioParaEditar(): void {
    this.usuarioParaEditar$.next(null);
  }

  // Obter valor atual do usuário para editar (síncrono)
  getUsuarioParaEditarValue(): Usuario | null {
    return this.usuarioParaEditar$.value;
  }
}
