var React = require('react');

var PokemonListItem = React.createClass({



    render: function() {

        return (
            <div className="col-md-4">
            <div className="panel panel-primary panel-body">
                <h4>{this.props.name}</h4>
                <p>{this.props.pkdx_id}</p>
                <p>{this.props.type}</p>

                </div>
            </div>
        );
    }
});

module.exports = PokemonListItem;
