import sqlite3 from "sqlite3";
import sqlite from "sqlite";

async function open() {
    const db = await sqlite.open({
        filename: "",
        driver: sqlite3.Database
    });
    return db;
}

export { open }
