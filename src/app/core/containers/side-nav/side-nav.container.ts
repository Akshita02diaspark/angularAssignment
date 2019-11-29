import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import{SidenavService} from '../../../services/sidenav.service'
@Component({
  selector: 'app-side-nav-container',
  templateUrl: './side-nav.container.html',
  styleUrls: ['./side-nav.container.scss']
})
export class SideNavContainer implements OnInit {
  
toggle;
  constructor(private _sidenavService:SidenavService) { }

  ngOnInit() {
    // this.toggle=this._sidenavService.toggleRightSidenav();
    // console.log("sdhfghsdgf"+this.toggle);

    this._sidenavService.change.subscribe(displayReport => {
      this.displayReport = displayReport;
      console.log("sdhfjdhf"+ this.displayReport)
    });
  }

 
  displayReport = true;

 

}
