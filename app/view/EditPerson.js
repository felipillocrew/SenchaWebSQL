Ext.define("SqliteDemo.view.EditPerson", {
  extend: 'Ext.form.Panel',
  requires: ['Ext.form.FieldSet', 'Ext.field.Text'],
  xtype: 'sqlitedemo-editperson',
  
  config: {
    layout: 'vbox',
    items: [
    {
      xtype: 'fieldset',
      items: [
      {
        xtype: 'textfield',
        label: 'Name',
        name: 'name'
      },
      {
        xtype: 'textfield',
        label: 'Apellido',
        name: 'apellido'
      },
      {
        xtype: 'textfield',
        label: 'Casa',
        name: 'casa'
      }
      ]
    },
    {
      xtype: 'button',
      ui: 'confirm',
      text: 'Save',
      itemId: 'saveBtn'
    },
    {
      xtype: 'button',
      ui: 'action',
      text: 'Delete',
      itemId: 'delBtn'
    }
    ]
  }
});
