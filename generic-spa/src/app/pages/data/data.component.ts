import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [CommonModule],
  providers: [],
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
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos') // Fetch all records
      .subscribe({
        next: data => {
          const randomIndex = Math.floor(Math.random() * data.length); // Select a random index
          this.apiData = data[randomIndex]; // Assign the random record
          this.loading = false;
        },
        error: err => {
          this.error = err.message;
          this.loading = false;
        }
      });
  }
}
