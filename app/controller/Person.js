Ext.define('SqliteDemo.controller.Person', {
  extend: 'Ext.app.Controller',
  
  config: {
    
    views: ['EditPerson'],
    
    models: ['Person'],
    
    stores: ['People'],
    
    refs: {
      main: 'sqlitedemo-main',
      listContainer: 'sqlitedemo-main #listContainer',
      list: 'sqlitedemo-main #listContainer list',
      addBtn: 'sqlitedemo-main #listContainer #addBtn',
      editPerson: 'sqlitedemo-main sqlitedemo-editperson',
      editPersonBtn: 'sqlitedemo-main sqlitedemo-editperson #saveBtn',
      delPersonBtn: 'sqlitedemo-main sqlitedemo-editperson #delBtn'
    },
    
    control: {
      addBtn: {
        tap: 'newPerson'
      },
      delPersonBtn: {
        tap: 'delPerson'
      },
      editPersonBtn: {
        tap: 'savePerson'
      },
      list: {
        itemtap: 'editPerson'
      },
      listContainer: {
        activate: 'deselectList'
      }
    }
  },
  
  deselectList: function() {
    this.getList().deselectAll();
  },
  
  newPerson: function() {
    this.showEditPerson(Ext.create('SqliteDemo.model.Person'));
  },
  
  editPerson: function() {
	  console.log(arguments);
	  console.log(arguments[3]);
    this.showEditPerson(arguments[3]);
  },
  
  showEditPerson: function(record) {
    
    var title = 'Edit Person';
    if(record.phantom) {
      title = 'New Person';
    }
    var editPerson = Ext.create('SqliteDemo.view.EditPerson', { title: title });
    
    editPerson.setRecord(record);
    
    this.getMain().push(editPerson);
  
  },
  
  savePerson: function() {
    console.log("savePerson");
    var editPerson = this.getEditPerson(),
    record = this.getEditPerson().getRecord(),
    store = Ext.getStore('People'),
    errors;
    
    record.set(editPerson.getValues());
    
    // validate
    errors = record.validate();
    if(!errors.isValid()) {
      // output errors
      var msg = 'Please correct the following errors: <ul>';
      
      for(var i = 0; i < errors.items.length; i++)
        msg += '<li>' + errors.items[i].getMessage() + '</li>';
      msg += '</ul>';
      
      Ext.Msg.alert('Error', msg);
      return;
    }
    
    if(record.phantom) store.add(record);
    store.sync();
    this.getMain().pop();
  },
  delPerson: function () {
		console.log("delPerson");
		var editPerson = this.getEditPerson();
		var currentNote = editPerson.getRecord();
		var notesStore = Ext.getStore("People");
		
		notesStore.remove(currentNote);
		notesStore.sync();
		
		this.getMain().pop();
	}
  
});