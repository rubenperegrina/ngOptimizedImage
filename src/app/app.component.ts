import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://picsum.photos/v2/list?page=12&limit=50')
      .subscribe((res: any) => {
        this.images = res;
      })
  }
}
