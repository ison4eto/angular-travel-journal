import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';
import { StoryFull } from '../models/story-full';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent implements OnInit {
  stories: Observable<StoryFull[]>
  constructor(
    private storyService: StoriesService
  ) { }

  ngOnInit() {
     this.stories = this.storyService.getAllStories()
  }
  //TODO pagination
}
