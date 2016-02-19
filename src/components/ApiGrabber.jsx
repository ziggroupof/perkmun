var React = require('react');
var Pokemons = require('./DataList.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var PokemonStore = require('../reflux/pokemonstore.jsx');

var ApiGrabber = React.createClass({
  mixins:[Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return (
      {
        pokemon: []
      }
    )
  },
  componentWillMount: function() {
    Actions.getPokemon();
  },
  onChange: function(event, pokemon){
    this.setState({pokemon: pokemon});
  },


   render: function() {
    var pokemonList = this.state.pokemon.map(function(item, key){



      return(
        <Pokemons
        key={key}
        name={item.name}
        pkdx_id={item.national_id}
        types={item.types}
        sprites={item.sprites}
        />
      );
    });


  return(
  <div className="col-sm-12">
  <div className="panel panel-primary">
  <div className="panel-heading ">
    <h2>Pokemon</h2>
    </div>
    <div className="row panel-body">
      {pokemonList}
    </div>
    </div>
  </div>
  );

  }

});


module.exports = ApiGrabber;
