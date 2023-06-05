import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userObject: any = ''
  userId: any = ''
  intUserId: number = 0
  currentUrl: string = ''
  constructor(public user: UsersService, public params: ActivatedRoute, public router: Router) {

    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
  }

  ngOnInit() {
    this.userId = this.params.snapshot.paramMap.get('id')
    this.intUserId = parseInt(this.userId)

    // retrieving the user from db
    this.user.getActiveUser(this.intUserId).subscribe((user) => {
      this.userObject = user
    })
  }
}
