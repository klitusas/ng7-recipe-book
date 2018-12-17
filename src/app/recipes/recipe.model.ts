export class Recipe {
    public name: string; //express that can be accessed outside
    public descritpion: string;
    public imagePath: string;

    //add constructor so that i can instansiate with a 'new' keyword
    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.descritpion = desc;
        this.imagePath = imagePath;
    }
}