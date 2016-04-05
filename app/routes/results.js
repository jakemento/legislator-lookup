import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url= 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=cb6243441c5544de8ee26c2779e02061&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
  }
});
