import { Component, OnInit } from '@angular/core';
import { StoryFull } from '../models/story-full';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../../core/services/stories/stories.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-details-story',
  templateUrl: './details-story.component.html',
  styleUrls: ['./details-story.component.css']
})
export class DetailsStoryComponent implements OnInit {
  story: StoryFull
  id: string
  constructor(private route: ActivatedRoute,
  private storyService: StoriesService,
  private authService: AuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.storyService.getById(this.id)
    .subscribe(data => {
      this.story = data
    })
  }

}
