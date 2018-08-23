import { Component, OnInit } from '@angular/core';
import { StoryFull } from '../models/story-full';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-details-story',
  templateUrl: './details-story.component.html',
  styleUrls: ['./details-story.component.css']
})
export class DetailsStoryComponent implements OnInit {
  story: StoryFull
  id: string
  constructor(private route: ActivatedRoute,
  private storyService: StoriesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.storyService.getById(this.id)
    .subscribe(data => {
      this.story = data;
    })
  }

}
