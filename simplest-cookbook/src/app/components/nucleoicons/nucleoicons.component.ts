import { Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './nucleoicons.component.html',
    styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit, OnDestroy {
    constructor( private element: ElementRef) {}
    ngOnInit() {
        // tslint:disable-next-line: prefer-const
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    }
    ngOnDestroy() {
        // tslint:disable-next-line: prefer-const
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    }
}
