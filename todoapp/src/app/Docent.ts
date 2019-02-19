export class Docent{

    id: number = 0;
    firstName: string;
    lastName: string;
    userName: string;
    passWord: string;
    place: string;
    creature: string;
  
    constructor(id: number, firstName: string, lastName: string, userName: string, passWord: string, place: string, creature: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userName = userName;
      this.passWord = passWord;
      this.place = place;
      this.creature = creature;
    }
  }
