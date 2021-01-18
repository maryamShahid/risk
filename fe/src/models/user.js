class User {
    constructor(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

module.exports = User;
