import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}

  goto(page: string, id: string | null = null): void {		
		if (id) {
			this.router.navigate(['/' + page], { fragment: id });
		}
		else {
			this.router.navigate(['/' + page]);
		}
	}
}
