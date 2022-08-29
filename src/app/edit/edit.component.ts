import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })


  onSubmit() {
    console.log(this.contactForm.value);
  }
}
