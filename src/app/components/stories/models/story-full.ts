import { Creator } from "./creator";

export class StoryFull{
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public creator: Creator,
        public createdOn: Date
    ){}
}