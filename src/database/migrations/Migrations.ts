import { BaseDatabase } from "../BaseDatabase";
import { ConverterDatabase } from "../ConverterDatabase";
import { coins } from "./data";

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
            DROP TABLE IF EXISTS ${ConverterDatabase.TABLE_NAME};

            CREATE TABLE IF NOT EXISTS ${ConverterDatabase.TABLE_NAME} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                symbol VARCHAR(255) NOT NULL
            );
        `)

    }

    insertData = async () => {
        await BaseDatabase
            .connection(ConverterDatabase.TABLE_NAME)
            .insert(coins)
    }
}

const migrations = new Migrations()
migrations.execute()