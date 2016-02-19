var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var ImageStore = Reflux.createStore({
  listenables: [Actions],
  getImage: function(iurl) {
    HTTP.get(iurl)
    .then(function(data){
      console.log(data);
      this.image = data;
      this.fireUpdate();
    }.bind(this));
  },

  //Refresh function
  fireUpdate: function() {
    this.trigger('change', this.image);
    console.log('Fired');
  }
});

module.exports = ImageStore;
