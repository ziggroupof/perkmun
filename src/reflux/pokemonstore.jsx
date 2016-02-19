var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon: function() {
    HTTP.get('/api/v1/pokemon/?limit=12')
    .then(function(data){
      //console.log(data);
      this.pokemon = data.objects;
      this.fireUpdate();
    }.bind(this));
  },

  //Refresh function
  fireUpdate: function() {
    this.trigger('change', this.pokemon);
    console.log('Fired');
  }
});

module.exports = PokemonStore;
