Ext.define('SqliteDemo.model.Person', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
    { name: 'id', type: 'int' }, // Every model must start with an id of type int
    { name: 'name', type: 'string' }, // bools, floats, objects and arrays also supported
    { name: 'apellido', type: 'string' }, // bools, floats, objects and arrays also supported
    { name: 'casa', type: 'string' } // bools, floats, objects and arrays also supported
    ],
    
    validations: [
    {
      name: 'name',
      type: 'length',
      min: 4,
      message: 'Person\'s name must be at least 4 characters long'
    },
    {
      name: 'apellido',
      type: 'length',
      min: 4,
      message: 'Person\'s apellido must be at least 4 characters long'
    }
    ],
    
    proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'people',
        dbConn: SqliteDemo.util.InitSQLite.getConnection()
      }
    }
  }
  
});