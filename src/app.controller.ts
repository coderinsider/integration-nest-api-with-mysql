import { Controller, Get, Render } from '@nestjs/common';
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
   root() {
      const pageLists = {
         message: "I love you so much, my dream girls",
         pageTitle: 'Nest Application',
         currentPage: 'nest-application'
      }
      return pageLists
   }
   // getAbout(): string {
   //    return this.appService.getAbout();
   // }
}
