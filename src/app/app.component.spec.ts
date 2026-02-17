import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("renders the navbar title", () => {
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector(".navbar-title");
    expect(title?.textContent?.trim()).toBe("Gestão de Usuários");
  });

  it("toggles the menu state and class", () => {
    const element: HTMLElement = fixture.nativeElement;
    const menu = element.querySelector(".menu");

    expect(component.isMenuCollapsed).toBeFalse();
    expect(menu?.classList.contains("collapsed")).toBeFalse();

    component.toggleMenu();
    fixture.detectChanges();

    expect(component.isMenuCollapsed).toBeTrue();
    expect(menu?.classList.contains("collapsed")).toBeTrue();
  });
});
