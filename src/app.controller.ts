import { AuthGuard } from 'src/guards/auth/auth.guard';
import { User2Service } from './services/user2/user2.service';
import { UserService } from './services/user/user.service';
import { ContentTypeMiddleware } from './auth/middleware/content-type/content-type.middleware';

import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';
import { UserDto } from './UserDto/user.dto';

@Controller()
// @Controller('admin')
export class AppController {


  @Get('user')
  @UseGuards(AuthGuard)
  getUser(@Req() req: any) {
    const data = req.user
    return `${data.name} data : ${JSON.stringify(data,null,2)}`
  }






  //inject userSrvice
  // constructor(private readonly User2Service: User2Service) { }

  // @Get('users')
  // @UseGuards(AuthGuard)       //for controller leevel use of guards apply it below the controller()
  // getValue() {
  //   return this.User2Service.getUsers()
  // }



  // @Get(':id')

  // fetchReq(@Req() req: Request, @Res() res: Response) {
  //   const { id } = req.params;
  //   const queryParams = req.query;
  //   const agent = req.headers['user-agent'];
  //   return res.status(200).send(`
  //     <script>
  //       console.log("Id :","${id}");
  //       console.log("Query Params :", ${JSON.stringify(queryParams)})
  //       console.log("user agent :", "${agent}")
  //     </script>
  //     `)   
  // }

  // @Get(":id")
  // @HttpCode(HttpStatus.ACCEPTED) //can use nestjs decorator status codes or use custom with response
  // fetchQuery(
  //   @Param("id") id:string,
  //   @Query("name") name:string,
  //   @Query("age") age:number,
  // ){
  //    return {
  //     Id: `${id}`,
  //     name: `${name}`,
  //     age:`${age}`
  //    }
  // }

  // @Post()
  // createMsg(@Body() msg:string){
  //    console.log(msg)
  //   return "message recieved succesfully"
  //    }
  // constructor(private readonly appService: AppService) { }

  // @Get()
  // getToken(@Req() req :Request){
  //  const token = req["token"]
  //  return {msg:"access authorized",token}
  // }

  // @Get("route1")
  // route1(@Req() req: Request) {
  //   return { message: "welcome to client route1" }
  // }

  // @Get("route2")
  // route2(@Req() req: Request) {
  //   return { message: "welcome to client route2" }
  // }

  // @Get("route3")
  // route3(@Req() req: Request) {
  //   return { message: "welcome to client route3 " }
  // }

  // @Post("route4")
  // route4(@Req() req: Request) {

  //   return {
  //     contentType: req.headers["content-type"],
  //     message: "this is route4 under /client"
  //   }
  // }

  //  @Post('create')
  //  create(@Body() data:any){
  //   return data
  //  }


  // constructor(private readonly userService: UserService) { }
  // @Post()
  // createUser(@Body() user: UserDto) {
  //   this.userService.createUser(user);

  //   return {
  //     message: "User created successfully",
  //     user,
  //   };
  // }

  // @Get()
  // getAllUsers(): UserDto[] {
  //   return this.userService.getAllUsers()
  // }




}
