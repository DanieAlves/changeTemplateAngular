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
  connection: boolean;

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  changeConnection(value: string): void {
    if (value == 'webservice') {
      this.connection = true;
    }
    if (value == 'bancodedados') {
      this.connection = false;
    }
  }

  changePlaceholder(value: string): void {
    if (value == 'mssqlserver') {
      this.placeholderVar = 'jbdc:mssqlserver:://${hostname}:${port}/${databaseName}';
    }
    if (value == 'oracle') {
      this.placeholderVar = 'jbdc:oracle:://${hostname}:${port}/${databaseName}';
    }
    if (value == 'postgresql'){
      this.placeholderVar = 'jbdc:postgresql:://${hostname}:${port}/${databaseName}';
    }
    if (value == 'mysql'){
      this.placeholderVar = 'jbdc:mysql:://${hostname}:${port}/${databaseName}';
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      url: [null],
      servidor: [null, Validators.required],
      porta: [null, Validators.required],
      base: [null, Validators.required],
      usuario: [null, Validators.required],
      senha: [null],
      classeServer: [null],
      conexao:[null, Validators.required],
      urlDesenvolvimento: [null],
      urlHomologacao: [null],
      urlProducao: [null],
      banco: [null],

      teste:[null]
    });
  }
}
