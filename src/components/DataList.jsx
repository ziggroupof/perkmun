var React = require('react');
var Image = require('./imageload.jsx');
var Type = require('./typeblock.jsx');

var PokemonListItem = React.createClass({

    render: function() {

      var image = <Image iurl={this.props.sprites[0].resource_uri} />;

      var types = this.props.types.map(function(type){
              return <Type key={type.name} name={type.name} id={type.resource_uri} />;
            });

        return (
            <div className="col-md-4">
            <div className="panel panel-primary panel-body">
                <div>{image}</div>
                <h4>{this.props.name}</h4>
                <p>#{this.props.pkdx_id}</p>
                {types}

                </div>
            </div>
        );
    }
});

module.exports = PokemonListItem;
