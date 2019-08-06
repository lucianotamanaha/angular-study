import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.getUser().subscribe((res: any[])=>{
      console.log(res);
    })
  }

}
