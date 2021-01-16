import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  group: FormGroup;
  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

}
