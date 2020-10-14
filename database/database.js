const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

module.exports = class Database {
    constructor() {
        this.db = sqlite.open({
            filename: "",
            driver: sqlite3.Database
        });
    }

    get open() {
        return this.db;
    }

    static get bansList() {
        const result = this.db.get("");
        return result
    }

    static async bansList() {
        const result = await this.db.get("");
        return result
    }
}
