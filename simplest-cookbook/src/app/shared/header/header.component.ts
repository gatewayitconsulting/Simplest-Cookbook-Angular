import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window/window';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      if (offset < 50) {
        $('nav').removeClass('scrolled');
        $('span').removeClass('scrolled');
      } else {
        $('nav').addClass('scrolled');
        $('span').addClass('scrolled');
      }
  }

  ngOnInit() {
  }

}
