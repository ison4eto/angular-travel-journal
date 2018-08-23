import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { StoriesService } from '../../../core/services/stories/stories.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  bindingModel: Story
  constructor(private storyService: StoriesService,
  private authService: AuthenticationService) {
    const creator = this.authService.getName()
    const date = new Date()
    this.bindingModel = new Story('','','',creator, date)
   }

  ngOnInit() {
  }

  createStory(){
    this.storyService.createStory(this.bindingModel)

  }

}
