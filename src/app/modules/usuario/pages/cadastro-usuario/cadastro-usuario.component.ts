import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-cadastro-usuario",
  templateUrl: "./cadastro-usuario.component.html",
  styleUrls: ["./cadastro-usuario.component.scss"],
})
export class CadastroUsuarioComponent implements OnInit, OnChanges {
  @Input() usuarioParaEditar: any = null;
  @Output() usuarioAdicionado = new EventEmitter<any>();

  form!: FormGroup;
  submitted = false;
  formData: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["usuarioParaEditar"] && this.form) {
      this.inicializarFormulario();
    }
  }

  inicializarFormulario(): void {
    this.form = this.fb.group({
      name: [
        this.usuarioParaEditar?.name || "",
        [Validators.required, Validators.minLength(3)],
      ],
      email: [
        this.usuarioParaEditar?.email || "",
        [Validators.required, Validators.email],
      ],
      telefone: [
        this.usuarioParaEditar?.telefone || "",
        [Validators.required, Validators.minLength(8)],
      ],
      cpf: new FormControl(
        {
          value: this.usuarioParaEditar?.cpf || "",
          disabled: !!this.usuarioParaEditar,
        },
        Validators.required,
      ),
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched || this.submitted)
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const usuario = this.form.getRawValue();
      this.formData = usuario;
      this.usuarioAdicionado.emit(usuario);
      this.form.reset();
      this.submitted = false;
    }
  }
}
