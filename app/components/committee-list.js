import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listCommittees() {
      this.sendAction('listCommittees');
    }
  }
});
