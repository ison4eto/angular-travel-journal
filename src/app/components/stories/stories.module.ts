import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStoriesComponent } from './list-stories/list-stories.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { DeleteStoryComponent } from './delete-story/delete-story.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { DetailsStoryComponent } from './details-story/details-story.component';
import { FormsModule } from '@angular/forms';
import { StoriesListSingleComponent } from './stories-list-single/stories-list-single.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ListStoriesComponent, EditStoryComponent, DeleteStoryComponent, CreateStoryComponent, DetailsStoryComponent, StoriesListSingleComponent]
})
export class StoriesModule { }
