import { Injectable } from '@nestjs/common';

@Injectable()
export class UserapiService {
    private readonly users=[
        {
            apiKey:'userA101',
            name:'UserA',
            email:'userA@example.com',
        },
         {
            apiKey:'userB102',
            name:'UserB',
            email:'userB@example.com',
        },
         {
            apiKey:'userC103',
            name:'UserC',
            email:'userC@example.com',
        }
    ]

   getUser(apiKey:string){
    return this.users.find((user)=>user.apiKey===apiKey)
   }

}
