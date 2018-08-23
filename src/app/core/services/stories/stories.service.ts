import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { StoryFull } from '../../../components/stories/models/story-full';
import { Observable } from 'rxjs';
import { Story } from '../../../components/stories/models/story';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const baseURL: string = "https://travel-journal-project.firebaseio.com/stories/"

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient,
  private toastr: ToastrService,
private router: Router) { }

  getAllStories(): Observable<StoryFull[]> {
    return this.http.get<StoryFull[]>(`${baseURL}.json`)
      .pipe(map((res: Response) => {
        const ids = Object.keys(res)
        const stories: StoryFull[] = []
        for (const i of ids) {
          stories.push(
            new StoryFull(
              i,
              res[i].title,
              res[i].description,
              res[i].imageUrl,
              res[i].creator,
              res[i].createdOn
          ))
        }
        return stories
      }))
  }

  createStory(body: Story) {
    if(body.title == '' || body.description == '' || body.imageUrl == '' ){
      this.toastr.error('Please write all fields', "Warning!")
    }
    else{
      return this.http.post(`${baseURL}.json`, body)
      .subscribe(obj =>{
        this.toastr.success(`Created story with id ${obj['name']}`,"Success")
        this.router.navigate(['/stories/all'])
      })
    }
    
  }

  getById(storyId: string){
    return this.http.get<StoryFull>(`${baseURL}${storyId}/.json`)
  }

  editStory(body){
    return this.http.patch(`${baseURL}.json`, body)
    .subscribe((data) => {
      this.toastr.success('Story edited!', 'Success!');
      this.router.navigate(['/stories/all']);
    })
  }

  deleteStory(storyId: string){
    return this.http.delete(`${baseURL}${storyId}/.json`)
    .subscribe((data) => {
      this.toastr.success('Story delted!', 'Success!');
      this.router.navigate(['/stories/all']);
    })
  }

}
