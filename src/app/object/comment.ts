import {User} from './user';

export class Comment {
  public id: number;
  public userId: number;
  public bookId: number;
  public text: string;
  public user: User;


  constructor(id: number, userId: number, bookId: number, text: string, user: User) {
    this.id = id;
    this.userId = userId;
    this.bookId = bookId;
    this.text = text;
    this.user = user;
  }
}
