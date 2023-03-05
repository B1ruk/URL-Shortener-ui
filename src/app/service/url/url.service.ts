import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlData } from 'src/app/model/url';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  BASE_URL = `http://localhost:8080/shortenUrl`;

  constructor(private httpClient: HttpClient) {}

  shortenUrl(link: string): Observable<UrlData> {
    return this.httpClient.post<UrlData>(`${this.BASE_URL}`, {
      url: link,
    });
  }

  reverseUrl(shortenedUrl: string) {
    return this.httpClient.get(`${this.BASE_URL}/redirect?url=${shortenedUrl}`);
  }
}
