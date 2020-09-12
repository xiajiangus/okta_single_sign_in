import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  messageFormGroup = new FormGroup({
    textMessage : new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const navigationExtras: NavigationExtras = {state: {message: this.messageFormGroup.value}};
      this.router.navigate(['message'], navigationExtras);
  }

}
