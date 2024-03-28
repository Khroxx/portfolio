import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language = new BehaviorSubject<string>('en');
  currentLanguage = this.language.asObservable();

  constructor(private http: HttpClient) {}

  changeLanguage(language: string) {
    this.language.next(language);
  }

  getTranslation(key: string) {
    return this.http.get(`/assets/i18n/${this.language.value}.json`).pipe(
      map((json: any) => json[key])
    );
  }
}