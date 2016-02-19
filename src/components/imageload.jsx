var React = require('react');
var HTTP = require('../services/httpservice.js');
var baseUrl = "http://pokeapi.co";

var imageload = React.createClass({

  getInitialState: function(){
  return {pokemonImage: null};
},
componentDidMount: function(){
  HTTP.get(this.props.iurl)
  .then(function(data) {
    this.setState({pokemonImage: data});
  }.bind(this));
},
render: function(){
  var data = this.state.pokemonImage;
  var img = <div className="placeholder-image"><img src=" " /></div>;

  if (data){
    var imgSrc = baseUrl + data.image;
    var img = <img src={imgSrc} />;
  };

  return (
    <span>{img}</span>
  );
}



});

module.exports = imageload;
