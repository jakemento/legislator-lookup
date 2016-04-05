import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listBills() {
      this.sendAction('listBills');
    }
  }
});
