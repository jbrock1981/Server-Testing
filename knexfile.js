// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './usersDB.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/Migrations'
    },
    seeds: {
      directory: './data/Seeds'
    }
  }
};
