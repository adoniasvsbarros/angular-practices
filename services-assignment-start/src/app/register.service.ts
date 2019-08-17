export class RegisterService {
    inactiveToActiveCounter = 0;
    activeToInactiveCounter = 0;

    incrementInactiveToActive(){
        this.activeToInactiveCounter++;
        console.log('inactive to active: ' + this.activeToInactiveCounter);
    }
    
    incrementActiveToInactive(){
        this.inactiveToActiveCounter++;
        console.log('active to inactive: ' + this.inactiveToActiveCounter);
    }
}