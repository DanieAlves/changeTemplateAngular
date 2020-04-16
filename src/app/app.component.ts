import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercForm';
  placeholderVar = 'exemplo vazio';
  teste: boolean;

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  showInput(value: string): void {
    if (value == 'sql') {
      this.teste = true;
    }
    else {
      this.teste = false;
    }
  }

  changePlaceholder(value: string): void {
    if (value == 'sql') {
      this.placeholderVar = 'Exemplo sql';
    }
    if (value == 'mongo') {
      this.placeholderVar = 'Exemplo mongo';
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      website: [null, [Validators.required]],
      url: [null],
      banco: [null],
      agree: [false],
      porta: [null]
    });
  }
}
