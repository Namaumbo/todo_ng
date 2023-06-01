import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userObject: any = ''
  userId: any = ''
  intUserId: number = 0
  constructor(public user: UsersService, public params: ActivatedRoute) {
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
