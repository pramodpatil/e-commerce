import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mode: string = 'side';
  opened: boolean = true;

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor() { }

  ngOnInit() {
  }

  isSmallScreen () {
    console.log(this.mediaMatcher.matches)
    return this.mediaMatcher.matches;
  }
}
