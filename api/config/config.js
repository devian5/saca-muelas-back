module.exports = 
{
    "development": {
        "username": process.env.MYSQL_USER || "root",
        "password": process.env.MYSQL_PASSWORD || "password",
        "database": process.env.MYSQL_DATABASE || "database_development",
        "host": process.env.MYSQL_HOST || "localhost",
        "port": process.env.MYSQL_PORT || "3306",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}