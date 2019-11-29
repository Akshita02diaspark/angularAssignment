import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }
  public displayReport: boolean = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggleSidenav() {
		this.displayReport = !this.displayReport;
    console.log(this.displayReport);
    this.change.emit(this.displayReport);
    
	}

}
