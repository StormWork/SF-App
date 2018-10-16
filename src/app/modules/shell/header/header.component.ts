import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    jQuery('#navHiddenContent').collapse('toggle');
    jQuery('.hamburger.hamburger--collapse').toggleClass('is-active');
  }

}
