import { BaseDatabase } from "../BaseDatabase";
import { CurrencyDatabase } from "../CurrencyDatabase";
import { Currencies } from "./data";

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
            DROP TABLE IF EXISTS ${CurrencyDatabase.TABLE_NAME};

            CREATE TABLE IF NOT EXISTS ${CurrencyDatabase.TABLE_NAME} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                symbol VARCHAR(255) NOT NULL
            );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(CurrencyDatabase.TABLE_NAME)
            .insert(Currencies)
    }
}

const migrations = new Migrations()
migrations.execute()