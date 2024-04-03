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
  namePh: any;
  emailEmpty: any;
  emailPh: any;
  messageEmpty: any;
  messagePh: any;
  policy_before_link: any;
  policy_link_text: any;
  policy_after_link: any;
  policyAccept: any;
  formSubmit: any;
  formSuccess: any;

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.languageService.currentLanguage.subscribe(language => {
      this.loadJson(language);
    });
  }

  contactData = {
    name : "",
    email : "",
    message : "",
  };

  isCheckboxChecked = false;
  isSubmitClicked = false;
  formSubmitted = false;
  formSent = false;

  post = {
    endPoint: 'http://bari-sopa.com/sendMail.php', //Homepage ändern
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
    if (ngForm.submitted && ngForm.form.valid && this.isCheckboxChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formSent = true;
            this.formSubmitted = true;
          },
          error: (error) => {
            console.error(error);
            this.formSubmitted = false;
            this.formSent = false;
          },
          // complete: () => console.info('send post complete'), // geht
        });
    }
    this.formSubmitted = false;
  }

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
    this.namePh = data.namePh;
    this.emailEmpty = data.emailEmpty;
    this.emailPh = data.emailPh;
    this.messageEmpty = data.messageEmpty;
    this.messagePh = data.messagePh;
    this.formSubmit = data.formSubmit;
    this.formSuccess = data.formSuccess;
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



  checkboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
  }

  
  
}
