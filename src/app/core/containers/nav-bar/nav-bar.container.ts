import { Component, OnInit, Input, HostListener } from '@angular/core';
import{SidenavService} from '../../../services/sidenav.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.container.html',
  styleUrls: ['./nav-bar.container.scss']
})
export class NavBarContainer implements OnInit {
  data;
  constructor(private _sidenavService:SidenavService) { }

  ngOnInit() {
 
  }

// toggle(){

//   this.data=this._sidenavService.toggleRightSidenav();
// }

@HostListener('click')
click() {
  this._sidenavService.toggleSidenav();
}
}
