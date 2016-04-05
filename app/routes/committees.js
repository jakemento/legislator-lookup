import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url= 'http://congress.api.sunlightfoundation.com/committees?per_page=all&subcommittee=true&apikey=cb6243441c5544de8ee26c2779e02061';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
  }
});
