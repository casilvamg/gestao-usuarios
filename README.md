# Gestão de Usuários - Angular 14

Uma aplicação Angular 14 para gerenciamento de usuários com CRUD completo, utilizando arquitetura modular e boas práticas do Angular.
Aplicação criada para efetuar testes na ferramenta github copilot

## 📋 Funcionalidades

- ✅ Cadastro de usuários com validação de formulário
- ✅ Listagem de usuários com tabela rolável
- ✅ Edição de usuários (CPF bloqueado para edição)
- ✅ Remoção de usuários com confirmação
- ✅ Menu lateral retrátil
- ✅ Navegação por rotas
- ✅ Gerenciamento de estado com RxJS

## 🏗️ Arquitetura

### Estrutura de Pastas

```
gestao-usuarios/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   └── usuario/
│   │   │       ├── models/
│   │   │       │   └── usuario.model.ts           # Modelo de dados
│   │   │       ├── pages/
│   │   │       │   ├── cadastro-usuario/
│   │   │       │   │   ├── cadastro-usuario.component.ts           # Componente apresentacional
│   │   │       │   │   ├── cadastro-usuario.component.html
│   │   │       │   │   ├── cadastro-usuario.component.scss
│   │   │       │   │   ├── cadastro-usuario.component.spec.ts      # Testes do componente
│   │   │       │   │   └── cadastro-usuario-container.component.ts # Componente inteligente
│   │   │       │   └── listar-usuario/
│   │   │       │       ├── listar-usuarios.component.ts            # Componente apresentacional
│   │   │       │       ├── listar-usuarios.component.html
│   │   │       │       ├── listar-usuarios.component.scss
│   │   │       │       ├── listar-usuarios.component.spec.ts       # Testes do componente
│   │   │       │       └── listar-usuarios-container.component.ts  # Componente inteligente
│   │   │       ├── services/
│   │   │       │   └── usuario.service.ts         # Gerenciamento de estado
│   │   │       └── usuario.module.ts              # Módulo de funcionalidade
│   │   ├── app-routing.module.ts                  # Rotas principais
│   │   ├── app.component.ts                       # Componente raiz
│   │   ├── app.component.html                     # Template com menu e router-outlet
│   │   ├── app.component.scss                     # Estilos do layout
│   │   ├── app.component.spec.ts                  # Testes do componente raiz
│   │   └── app.module.ts                          # Módulo raiz
│   ├── main.ts                                    # Ponto de entrada
│   ├── index.html                                 # HTML principal
│   ├── styles.scss                                # Estilos globais
│   ├── test.ts                                    # Bootstrap dos testes Angular
│   └── polyfills.ts                               # Polyfills compartilhados
├── angular.json                                   # Configuração Angular CLI
├── karma.conf.js                                  # Configuração do Karma (testes)
├── package.json                                   # Dependências do projeto
├── tsconfig.spec.json                             # Configuração TypeScript para testes
├── tsconfig.json                                  # Configuração TypeScript
└── README.md                                      # Este arquivo

```

### Padrões Implementados

**Smart/Dumb Components (Container/Presentation)**

- **Container Components**: Gerenciam estado e lógica de negócio
  - `CadastroUsuarioContainerComponent`
  - `ListarUsuariosContainerComponent`
- **Presentation Components**: Apenas recebem dados e emitem eventos
  - `CadastroUsuarioComponent`
  - `ListarUsuariosComponent`

**Gerenciamento de Estado**

- Utiliza `BehaviorSubject` do RxJS para gerenciar estado centralizado
- `UsuarioService` expõe Observables para componentes se inscreverem
- Estado síncrono acessível via `getUsuarioParaEditarValue()`

**Módulos**

- `AppModule`: Módulo raiz da aplicação
- `UsuarioModule`: Módulo de funcionalidade isolado
- `AppRoutingModule`: Configuração de rotas

## 🚀 Rotas

| Rota                 | Componente                        | Descrição                   |
| -------------------- | --------------------------------- | --------------------------- |
| `/usuarios/listar`   | ListarUsuariosContainerComponent  | Listagem de usuários        |
| `/usuarios/cadastro` | CadastroUsuarioContainerComponent | Cadastro/edição de usuários |

## 🎨 Características de UI

- **Tabela com scroll**: Exibe até 5 registros por vez com cabeçalho fixo
- **Menu retrátil**: Menu lateral que pode ser expandido/retraído
- **Validações de formulário**:
  - Nome: mínimo 3 caracteres
  - Email: formato válido
  - Telefone: mínimo 8 caracteres
  - CPF: obrigatório e bloqueado para edição
- **Feedback visual**: Estados de erro nos campos inválidos

## 🛠️ Tecnologias

- **Angular 14.0.0**: Framework principal
- **TypeScript 4.7.2**: Linguagem de programação
- **RxJS 7.5.0**: Programação reativa
- **Angular Router**: Navegação entre páginas
- **Reactive Forms**: Gerenciamento de formulários
- **SCSS**: Pré-processador CSS

## 📦 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## ⚙️ Instalação

1. Clone o repositório

2. Instale as dependências:

```bash
npm install
```

## 🚀 Desenvolvimento

Execute o comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

A aplicação será executada em `http://localhost:4200/`

O servidor recarrega automaticamente quando você modifica arquivos fonte.

## 🧪 Testes

Para executar os testes unitários:

```bash
npm test
```

Os testes são escritos em arquivos `*.spec.ts` e o runner utiliza Karma + Jasmine.

## 📦 Build

Para gerar uma build de produção:

```bash
npm run build
```

Os arquivos compilados estarão no diretório `dist/gestao-usuarios/`

## 🎯 Como Usar

1. **Acessar a aplicação**: Abra `http://localhost:4200/` no navegador

2. **Listar usuários**: Clique em "Listar Usuários" no menu lateral

3. **Cadastrar novo usuário**:
   - Clique em "Cadastrar Usuário" no menu
   - Preencha todos os campos obrigatórios
   - Clique em "Salvar"

4. **Editar usuário**:
   - Na listagem, clique no ícone de editar (✏️)
   - Modifique os dados (CPF não pode ser alterado)
   - Clique em "Salvar"

5. **Remover usuário**:
   - Na listagem, clique no ícone de remover (🗑️)
   - Confirme a remoção

6. **Menu retrátil**: Clique no botão "☰" para expandir/retrair o menu

## 📝 Modelo de Dados

```typescript
class Usuario {
  name: string;
  email: string;
  telefone: string;
  cpf: string;
}
```

## 🔄 Fluxo de Dados

1. **Componentes Container** se inscrevem nos Observables do `UsuarioService`
2. **UsuarioService** mantém o estado usando `BehaviorSubject`
3. **Componentes Presentation** recebem dados via `@Input()` e emitem eventos via `@Output()`
4. **Eventos** são capturados pelos Containers e processados pelo Service
5. **Estado atualizado** é propagado automaticamente para todos os componentes inscritos
