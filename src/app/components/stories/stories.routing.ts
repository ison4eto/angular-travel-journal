import { Route, RouterModule } from "@angular/router";
import { CreateStoryComponent } from "./create-story/create-story.component";
import { DetailsStoryComponent } from "./details-story/details-story.component";
import { EditStoryComponent } from "./edit-story/edit-story.component";
import { DeleteStoryComponent } from "./delete-story/delete-story.component";
import { ListStoriesComponent } from "./list-stories/list-stories.component";
import { NgModule } from "@angular/core";

const routes: Route[] = [
    { path: 'create', component: CreateStoryComponent },
    { path: 'all', component: ListStoriesComponent },
    { path: 'details/:id', component: DetailsStoryComponent },
    { path: 'edit/:id', component: EditStoryComponent },
    { path: 'delete/:id', component: DeleteStoryComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoriesRoutingModule{

}