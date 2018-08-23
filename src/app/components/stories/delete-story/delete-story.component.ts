import { Component, OnInit } from '@angular/core';
import { StoryFull } from '../models/story-full';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-delete-story',
  templateUrl: './delete-story.component.html',
  styleUrls: ['./delete-story.component.css']
})
export class DeleteStoryComponent implements OnInit {

  bindingModel: StoryFull
  id: string
  constructor(private route: ActivatedRoute,
  private storyService: StoriesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.storyService.getById(this.id)
    .subscribe(data => {
      this.bindingModel = data;
    })
  }

  delete(){
    this.storyService.deleteStory(this.id)
  }

}
