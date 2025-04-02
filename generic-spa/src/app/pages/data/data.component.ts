import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule here
})
export class DataComponent implements OnInit {
  apiData: any;
  loading = false;
  error: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.loading = true;
    this.error = undefined;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1') // Example API
      .subscribe(
        data => {
          this.apiData = data;
          this.loading = false;
        },
        error => {
          this.error = error.message;
          this.loading = false;
        }
      );
  }
}
