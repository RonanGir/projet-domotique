export class User {

  constructor(public fname: string,
              public lname: string,
              public email: string,
              public drinkPreference: string,
              public hobbies?: string[]
    ) {}

}
