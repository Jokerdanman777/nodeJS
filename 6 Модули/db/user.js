class User {
    constructor(lastname, firstname){
        this.lastname = lastname;
        this.firstname = firstname;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}

module.exports = User;