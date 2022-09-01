import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '../table/table.component';


@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

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

  onSubmit(newData:object) {
  newData= this.contactForm.value;
    console.log(newData);
    console.log(users)
    }

}
