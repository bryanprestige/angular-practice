import { Component,Input,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  //isDisabled = computed(() => this.loginForm.value.password === ''  || this.loginForm.value.email === '')
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])

  })

  ngOnInit() {
    console.log('componente cargado')
  }

  onFormSubmit() {
    //e.preventDefault()

    alert('credenciales correctas' )
    console.log(this.loginForm.value)

  }
}
