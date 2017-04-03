console.log(React);
console.log(ReactDOM);
//Some props
var my_news = [
  {
    author: 'Sasha One',
    text: 'Poltava news shoked people...',
    bigText: 'Poltava news shoked people in center of the city'
  },
  {
    author: 'Sasha Two',
    text: 'Some text for second news',
    bigText: 'Some text for second news that are expanded'
  },
  {
    author: 'Andrew',
    text: 'Best site - http://localhost:3000',
    bigText: 'Best site - http://localhost:3000 , current local development'
  }
];
// component
var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  onTotalNewsClick: function() {
    this.setState({counter: ++this.state.counter})
  },
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
    newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
           <Article data={item} />
        </div>
      )
    })
  } else {
    newsTemplate = <p>No news now</p>
  }
    return (
     <div className="news">
       {newsTemplate}
       <strong className={'news__count ' + (data.length > 0 ? '':'none') } onClick={this.onTotalNewsClick}>All news: {data.length}</strong>
     </div>
   );
  }
});
var TestInput = React.createClass({
  //lifecycle component
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.myTestInput).focus(); //focus on our input
  },
  showValue: function() {
    alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
  },
  render: function() {
    return (
      <div>
        <input
          className='test-input'
          defaultValue=''
          placeholder='Enter value'
          ref='myTestInput'
        />
         <button onClick={this.showValue} ref='alert_button'>Show value</button>
        </div>
    );
  }
});
var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function() {
    return {
      visible: false
    }
  },
  readmoreClick: function(e) {
    e.preventDefault();
    this.setState({visible:true});
  },
  render: function() {
    var author = this.props.data.author,
        text = this.props.data.text,
        bigText = this.props.data.bigText,
        visible = this.state.visible;

    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a href="#" onClick={this.readmoreClick} className={'news__readmore' + (visible ? 'none' : '')}>Read more</a>
        <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
      </div>
    )
  }
});
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h3>News</h3>
        <TestInput /> {/* Comment */}
        <News data={my_news} />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
