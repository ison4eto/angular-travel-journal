import { Creator } from "./creator";

export class Story{
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public creator: Creator,
        public createdOn: Date
    ){}
}