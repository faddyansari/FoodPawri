import { Component } from '@angular/core';
import { AuthService } from 'src/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodPawri-UI';
  namefield = "";
  constructor(private authService:AuthService){

  }
  SubmitName(){
    console.log(this.namefield);
    this.authService.dummyMsg(this.namefield).subscribe(res=>{
      if(res.status == 'ok'){
        console.log("successfully entered");
        
      }
    })
  }
}
