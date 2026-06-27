import { Controller, Get, HttpCode, HttpStatus, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {

  @Get(':id')
 
  fetchReq(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const queryParams = req.query;
    const agent = req.headers['user-agent'];
    return res.status(200).send(`
      <script>
        console.log("Id :","${id}");
        console.log("Query Params :", ${JSON.stringify(queryParams)})
        console.log("user agent :", "${agent}")
      </script>
      `)   
  }

  @Get(":id")
  @HttpCode(HttpStatus.ACCEPTED) //can use nestjs decorator status codes or use custom with response
  fetchQuery(
    @Param("id") id:string,
    @Query("name") name:string,
    @Query("age") age:number,
  ){
     return {
      Id: `${id}`,
      name: `${name}`,
      age:`${age}`
     }
  }
  constructor(private readonly appService: AppService) { }


}
