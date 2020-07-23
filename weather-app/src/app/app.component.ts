import { Component } from '@angular/core';
import { faRainbow, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isShowMenu: boolean = false;
  public rainbowIcon = faRainbow;
  public timesIcon = faTimes;
  public hamburgerMenuIcon = faBars;
  title = 'weather-app';

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

}
