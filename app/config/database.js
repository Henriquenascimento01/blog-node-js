import connection from "./default.js";

async function connect() {

    try {
        await connection.authenticate();
        console.log('Database connection successful')
    } catch (error) {
        throw new Error(`Error connecting to database ${error}`)
    }
}

export default connect; 