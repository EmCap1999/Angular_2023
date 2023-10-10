import { Injectable } from '@angular/core'

@Injectable()
export class loggingService {
    logStatuschange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}