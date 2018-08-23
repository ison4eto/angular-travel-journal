import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';
import { StoryFull } from '../models/story-full';
import { StoriesService } from '../../../core/services/stories/stories.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent implements OnInit {
  stories: Observable<StoryFull[]>
  constructor(
    private storyService: StoriesService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
      const name = this.authService.getName()
     this.stories = this.storyService.getAllStories()
  }
  //TODO pagination
}
