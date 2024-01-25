import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { validateHeaderValue } from 'http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FormBuilder, Validators]
})
export class AppComponent {

  constructor(public fbobj: FormBuilder) {

  }
  MarvellousForm = this.fbobj.group(
    {
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/")]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      zcode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Comment: ['', [Validators.required, Validators.minLength(30)]]
    }

  );

  SetData() {
    this.MarvellousForm.setValue(
      {
        fname: 'Piyush',
        phone: '8874652312',
        email: 'sonalikale@gmail.com',
        city: 'pune',
        zcode: '41102',
        Comment: ''
      }
    )
  }
}
