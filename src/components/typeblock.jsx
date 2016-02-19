var React = require('react');

var typeblock = React.createClass({

    render: function(){

    //get type id from api resource url
    //var pathArray = this.props.id.split( '/' );
    //var id = pathArray[4];
    var name = this.props.name;
    return (
      <p className={"type type-" + name}>{this.props.name}</p>
    );
  }
});

module.exports = typeblock;
