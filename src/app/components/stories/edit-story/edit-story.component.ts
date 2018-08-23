import { Component, OnInit } from '@angular/core';
import { StoryFull } from '../models/story-full';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
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

  edit(){
    const body = {
      [this.id] : this.bindingModel
    }
    
    this.storyService.editStory(body)
      
  }
}
