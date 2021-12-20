import {Role} from './role';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public name: string;
  public surname: string;
  public imgUrl: string;
  public roles: Role[];


  constructor(id: number, username: string, password: string, name: string, surname: string, imgUrl: string, roles: Role[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.imgUrl = imgUrl;
    this.roles = roles;
  }
}
