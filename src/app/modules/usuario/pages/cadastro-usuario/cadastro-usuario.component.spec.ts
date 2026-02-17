import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { CadastroUsuarioComponent } from "./cadastro-usuario.component";

describe("CadastroUsuarioComponent", () => {
  let fixture: ComponentFixture<CadastroUsuarioComponent>;
  let component: CadastroUsuarioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CadastroUsuarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates a form with required controls", () => {
    expect(component.form).toBeDefined();
    expect(component.form.contains("name")).toBeTrue();
    expect(component.form.contains("email")).toBeTrue();
    expect(component.form.contains("telefone")).toBeTrue();
    expect(component.form.contains("cpf")).toBeTrue();
  });
});
