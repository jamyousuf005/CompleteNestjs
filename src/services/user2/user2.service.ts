import { Injectable } from '@nestjs/common';

@Injectable()
export class User2Service {
    private users:string[]=["user1","user2","user3"]

    getUsers():string[]{
      return this.users
    }
}
