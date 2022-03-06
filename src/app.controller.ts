import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
   constructor(private readonly appService: AppService) {}

   @Get('/')
   getHello(): string {
      return this.appService.getHello();
   }

   @Get('/about')
   @Render('index')
   about() {
      const pageLists = {
         message: "I love you so much, my dream girls",
         pageTitle: 'Nest Application',
         currentPage: 'nest-application'
      }
      return pageLists
   }

   @Get('/about/detail')
   aboutdetail(@Res() res: Response) {
      return res.render(
         'index',
         {
            pageTitle: 'Nest Application',
            currentPage: 'nest-application',
            message: 'I am working on sg'
         }
      );
   }
   @Get('/about/json')
   aboutjson(@Res() res: Response) {
      return res.json(
      {
         status: true,
         message: 'Success',
         data: [
            {
               id: 1,
               courses: 'Docker',
               releaseDate: 'Mar 20, 2013'
            },
            {
               id: 2,
               courses: 'Github',
               releaseDate: 'Apr 10, 2008'
            },
            {
               id: 3,
               courses: 'AWS',
               releaseDate: 'Jul 1, 2002'
            }
         ]
      });
   }
   // getAbout(): string {
   //    return this.appService.getAbout();
   // }
}
