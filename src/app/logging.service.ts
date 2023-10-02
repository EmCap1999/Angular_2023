export class loggingService {
    logStatuschange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}