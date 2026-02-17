import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListarUsuariosComponent } from "./listar-usuarios.component";
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from "../../models/usuario.model";

describe("ListarUsuariosComponent", () => {
  let fixture: ComponentFixture<ListarUsuariosComponent>;
  let component: ListarUsuariosComponent;
  let usuarioService: jasmine.SpyObj<UsuarioService>;

  const usuariosMock: Usuario[] = [
    {
      name: "Ana",
      email: "ana@example.com",
      telefone: "11999999999",
      cpf: "12345678901",
    },
    {
      name: "Bruno",
      email: "bruno@example.com",
      telefone: "11888888888",
      cpf: "10987654321",
    },
  ];

  beforeEach(async () => {
    usuarioService = jasmine.createSpyObj("UsuarioService", ["removerUsuario"]);

    await TestBed.configureTestingModule({
      declarations: [ListarUsuariosComponent],
      providers: [{ provide: UsuarioService, useValue: usuarioService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
  });

  it("renders a row for each user", () => {
    component.usuarios = usuariosMock;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll("tbody tr");
    expect(rows.length).toBe(usuariosMock.length);
  });

  it("emits usuarioParaEditar when editarUsuario finds a user", () => {
    component.usuarios = usuariosMock;
    const emitSpy = spyOn(component.usuarioParaEditar, "emit");

    component.editarUsuario("12345678901");

    expect(emitSpy).toHaveBeenCalledWith(usuariosMock[0]);
  });

  it("calls service to remove when confirm is true", () => {
    component.usuarios = usuariosMock;
    spyOn(window, "confirm").and.returnValue(true);

    component.removerUsuario("12345678901");

    expect(usuarioService.removerUsuario).toHaveBeenCalledWith("12345678901");
  });
});
