import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule] ,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  color = 'accent'

  contactData = {
    name : '',
    email : '',
    message : ''
  }

  isCheckboxChecked = false;
  isSubmitClicked = false;
  mailTest = true;

  post = {
    endPoint: 'https://barisopa.de/sendMail.php', //Homepage ändern
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isSubmitClicked = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.isCheckboxChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // das weg und mailtest auf false nach dem testen

      ngForm.resetForm();
    }
  }

  checkboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
  }

  
  
}
