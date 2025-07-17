class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
  
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}muniba`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}
const muniba = new User("muniba@.com","123")
console.log(muniba.password);
console.log(muniba.email);


