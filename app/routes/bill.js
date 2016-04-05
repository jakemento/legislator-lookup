import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var id = params.bill_id;
    var url= 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + id + '&apikey=cb6243441c5544de8ee26c2779e02061';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
  }
});
