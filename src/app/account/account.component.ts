import { Component, Input } from '@angular/core';
import { loggingService } from '../logging.service';
import { AcccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [loggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(
    private loggingService: loggingService,
    private accountsService: AcccountsService
  ) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.loggingService.logStatuschange(status);
  }
}
