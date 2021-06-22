module.exports = {
    development: {
        client: "pg",
        connection: "postgres:///new-years-resolution-collection"
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
