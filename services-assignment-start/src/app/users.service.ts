import { Injectable } from "@angular/core";
import { RegisterService } from "./register.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private registerService: RegisterService) {}

    setToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.registerService.incrementActiveToInactive();
    }
    
    setToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.registerService.incrementInactiveToActive();
    }
}