import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss'],
})
export class MyNavbarComponent implements OnInit {
  public current_route: string = '/about';

  public navbar_menu_expand_mobile: boolean = false;

  constructor(private location: Location) {
    location.onUrlChange((url: string, state: unknown): void => {
      this.current_route = url;
    });
  }

  toggleNavbarMenu() : void {
    this.navbar_menu_expand_mobile = !this.navbar_menu_expand_mobile; 
   }

  // expandNavbarMenu(): void {
  //   this.navbar_menu_expand_mobile = true;
  // }

  // collapseNavebarMenu() : void { 
  //   this.navbar_menu_expand_mobile = false; 
  // }

  ngOnInit(): void {}
}
