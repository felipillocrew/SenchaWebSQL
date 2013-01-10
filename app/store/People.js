Ext.define('SqliteDemo.store.People', {
  
  extend: 'Ext.data.Store',
  
  requires: ['SqliteDemo.model.Person'],
  
  config: {
    model: 'SqliteDemo.model.Person',
    autoLoad: true,
    storeId: 'People',
    pageSize: 1000,
	sorters: [{
			property: 'name', 
			direction: 'DESC'
	}],
	grouper: {
			sortProperty: "name",
			direction: "DESC",
			groupFn: function (record) {
				if (record && record.data.name) {
					return record.data.name[0];
					//return record.get('name')[0];
				}
				else{
					return '';
				}
			}
		}
  },
  fullname: function() {
        var d = this.data,
            names = [d.name,d.apellido];
        return names.join(" ");
    }
});
