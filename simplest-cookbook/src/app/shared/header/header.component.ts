import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window/window';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private location: Location
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      if (offset < 50) {
        $('nav').removeClass('scrolled');
        $('button').removeClass('scrolled');
        $('span').removeClass('scrolled');
      } else {
        $('nav').addClass('scrolled');
        $('button').addClass('scrolled');
        $('span').addClass('scrolled');
      }
  }

  ngOnInit() {
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev:any) => {
        if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl) {
                this.yScrollStack.push(window.scrollY);
            }
        } else if (ev instanceof NavigationEnd) {
            if (ev.url == this.lastPoppedUrl) {
                this.lastPoppedUrl = undefined;
                window.scrollTo(0, this.yScrollStack.pop());
            } else {
                window.scrollTo(0, 0);
            }
        }
    });
  }

}
