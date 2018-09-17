
import {Component, Input, OnInit} from '@angular/core';
import {Navitems} from 'diva-shared-apps/components/interfaces/navitems';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: string;
  navItems: Navitems[] = [
    {
      displayName: 'System Code',
      route: 'systemcodes'
    },
    {
      displayName: 'System Values',
      route: 'systemvalues'
    }
  ];
  ngOnInit() {
   this.user = localStorage.getItem('user');
  }

}
