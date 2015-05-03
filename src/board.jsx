var classNames = require('classnames');

var Checker = React.createClass({
  render: function() {
    var classes = classNames({
      'checker': true,
      'p1': this.props.data === 'p1',
      'p2': this.props.data === 'p2'
    });
    return (
      <div className={classes}></div>
    );
  }
});

var Board = React.createClass({
  getInitialState: function() {
    return {
      board: [
        [0,"p1",0,"p1",0,"p1",0,"p1"],
        ["p1",0,"p1",0,"p1",0,"p1",0],
        [0,"p1",0,"p1",0,"p1",0,"p1"],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        ["p2",0,"p2",0,"p2",0,"p2",0],
        [0,"p2",0,"p2",0,"p2",0,"p2"],
        ["p2",0,"p2",0,"p2",0,"p2",0]
      ]
    };
  },
  render: function() {
    return (
      <div>
        {this.state.board.map(function(row){
          return <Board.BoardRow key={row.id} data={row} />;
        })}
      </div>
    );
  }
});

Board.BoardRow = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.data.map(function(cell) {
          return <Board.BoardRow.BoardCell key={cell.id} data={cell} />;
        })}
      </div>
    );
  }
});

Board.BoardRow.BoardCell = React.createClass({
  render: function() {
    return (
      <div className="cell">
        {this.props.data !== 0 ? <Checker data={this.props.data}/> : ''}
      </div>
    );
  }
});

React.render(<Board />, document.getElementById('chess-app'));
