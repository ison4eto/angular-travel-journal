import { Component, OnInit, Input } from '@angular/core';
import { StoryFull } from '../models/story-full';

@Component({
  selector: 'app-stories-list-single',
  templateUrl: './stories-list-single.component.html',
  styleUrls: ['./stories-list-single.component.css']
})
export class StoriesListSingleComponent implements OnInit {
  @Input() story: StoryFull
  constructor() { }

  ngOnInit() {
  }

}
