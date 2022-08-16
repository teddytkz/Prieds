import { Component, OnInit } from '@angular/core';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  queueNumber = 0;
  createdAt = '';

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.request().subscribe(
      (response) => {
        this.queueNumber = response.queueNumber;
        this.createdAt = response.createdAt;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
