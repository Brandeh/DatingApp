import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { NEVER, Observable } from 'rxjs';
import { User } from '../Models/user';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  model: any = {}

  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => 
    {
      console.log(error); 
    })
  }

  logout(){
    this.accountService.logout();
  } 
}
