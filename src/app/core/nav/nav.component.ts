import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListenerService } from '../../_services/listener.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isOpen: boolean = true;
  userLoggedIn: boolean = false;

  constructor(private router: Router, private listener: ListenerService) {
    this.listener.listen().subscribe((m: any) => {
      this.userLoggedIn = m;
    });

    if (sessionStorage.getItem('user_id')) {
      this.userLoggedIn = true;
    }
  }

  ngOnInit() {
  }

  public logOut(): void {
    sessionStorage.clear();
    this.userLoggedIn = false;
    this.router.navigate(['']);
  }

}
