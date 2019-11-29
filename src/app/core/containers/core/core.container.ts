import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-core-container',
  templateUrl: './core.container.html',
  styleUrls: ['./core.container.scss']
})
export class CoreContainer implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("i++ | Home")
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
