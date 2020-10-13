const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function open() {
    const db = await sqlite.open({
        filename: "",
        driver: sqlite3.Database
    });
    return db;
}

export { open }
