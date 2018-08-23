export class StoryFull{
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public creator: string,
        public createdOn: Date
    ){}
}