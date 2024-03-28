import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact: any;
  problem: any;
  contactMe: any;
  needMe: any;
  contactB: any;
  nameEmpty: any;
  emailEmpty: any;
  messageEmpty: any;
  policy_before_link: any;
  policy_link_text: any;
  policy_after_link: any;
  policyAccept: any;
  formSubmit: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }

  contactData = {
    name : '',
    email : '',
    message : ''
  }

  isCheckboxChecked = false;
  isSubmitClicked = false;
  mailTest = false;

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

  loadJson(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(
      (data: any) => {
        this.loadHeadlineJson(data);
        this.loadPolicyJson(data);
        this.loadFormJson(data);
      },
      error => {
        console.error('Error loading language file:', error);
      }
    );
  }

  loadFormJson(data: any) {
    this.nameEmpty = data.nameEmpty;
    this.emailEmpty = data.emailEmpty;
    this.messageEmpty = data.messageEmpty;
    this.formSubmit = data.formSubmit;
    return data;
  }

  loadPolicyJson(data: any) {
    this.policy_before_link = data.policy_before_link;
    this.policy_link_text = data.policy_link_text;
    this.policy_after_link = data.policy_after_link;
    this.policyAccept = data.policyAccept;
    return data;
  }

  loadHeadlineJson(data: any) {
    this.contact = data.contact;
    this.problem = data.problem;
    this.contactMe = data.contactMe;
    this.needMe = data.needMe;
    this.contactB = data.contactB;
    return data;
  }

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
    } 
    // else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // das weg und mailtest auf false nach dem testen

    //   ngForm.resetForm();
    // }
  }

  checkboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
  }

  
  
}
