import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlData } from 'src/app/model/url';
import { UrlService } from 'src/app/service/url/url.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css'],
})
export class UrlListComponent implements OnInit {
  linkForm!: FormGroup;

  urlData!: UrlData | null;

  constructor(private fb: FormBuilder, private urlService: UrlService) {}

  ngOnInit(): void {
    this.linkForm = this.fb.group({
      link: ['', Validators.required],
    });
  }

  shortenLink() {
    this.urlData = null;
    this.urlService
      .shortenUrl(this.linkForm.value.link)
      .subscribe((resp) => (this.urlData = resp));
  }

  reverseUrl() {
    this.urlService
      .reverseUrl(this.linkForm.value.link)
      .subscribe((resp) => {console.log(resp)});
  }

  redirectUrl() {
    window.open(this.urlData?.url, '_blank');
  }
}
