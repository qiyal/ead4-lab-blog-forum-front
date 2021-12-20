export class Post {
  public id: number;
  public userId: number;
  public username: string;
  public title: string;
  public text: string;

  constructor(id: number, userId: number, username: string, title: string, text: string) {
    this.id = id;
    this.userId = userId;
    this.username = username;
    this.title = title;
    this.text = text;
  }
}
