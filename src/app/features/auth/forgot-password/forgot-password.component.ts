import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  private fb = inject(FormBuilder);

  enviado = false;
  enviando = false;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get email() { return this.form.get('email')!; }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.enviando = true;
    // Simulamos el envío
    setTimeout(() => {
      this.enviando = false;
      this.enviado = true;
    }, 1500);
  }
}