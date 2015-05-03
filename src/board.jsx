var BoardCell = React.createClass({
  render: function() {
    return <div className="cell"></div>;
  }
});

var BoardRow = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.data.map(function(cell) {
          return <BoardCell key={cell.id} data={cell} />;
        })}
      </div>
    );
  }
});

var Board = React.createClass({
  getInitialState: function() {
    return {
      board: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
      ]
    };
  },
  render: function() {
    return (
      <div>
        {this.state.board.map(function(row){
          return <BoardRow key={row.id} data={row} />;
        })}
      </div>
    );
  }
});

React.render(<Board />, document.getElementById('chess-app'));
