import { Studio } from './studio';

export class Game{
    /*public title: string;
    public price: number;
    public studio: string;
    public genre: Array<String>;*/

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public studio: Studio,
        public cover: string,
        public genre: Array<string>){}


}
