
import { Component } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root, ngb-dropdown',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Exploring the Unexplored';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home', icon: '',

      },
      {
        label: 'Back Country Strips', icon: '',
        items: [
          {
            label: 'Idaho',
          },
          {
            label: 'Utah',
          },
        ],
      },
      {
        label: 'The Flying Machine', icon: '',
      },
      {
        label: 'Camping', icon: '',
      },

      {
        label: 'About',
      }

    ];
  }
}