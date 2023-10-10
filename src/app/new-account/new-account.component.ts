import { Component } from '@angular/core';
import { loggingService } from '../logging.service';
import { AcccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [loggingService]
})
export class NewAccountComponent {

  constructor(
    private loggingService: loggingService,
    private accountsService: AcccountsService
  ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatuschange(accountStatus);
  }
}
