import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent 
{
	icon: boolean = false;
  constructor(private router: Router) {}

  goto(page: string, id: string | null = null): void {		
		if (id) {
			this.router.navigate(['/' + page], { fragment: id });
		}
		else {
			this.router.navigate(['/' + page]);
		}
	}
	changeIcon() {
		if (this.icon == false) {
		  this.icon = true;
		} else {
		  this.icon = false;
		}
	  }
}
