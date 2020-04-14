export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public url: string;

  constructor(name: string, desc: string, imagePath: string, url: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.url = url;
  }
}
