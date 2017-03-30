console.log(React);
console.log(ReactDOM);
//Some props
var my_news = [
  {
    author: 'Sasha One',
    text: 'Poltava news shoked people...'
  },
  {
    author: 'Sasha Two',
    text: 'Some text for second news'
  },
  {
    author: 'Andrew',
    text: 'Best site - http://localhost:3000'
  }
];
// component
var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
    newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })
  } else {
    newsTemplate = <p>No news now</p>
  }
    return (
     <div className="news">
       {newsTemplate}
       <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
     </div>
   );
  }
});
var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        No news comments now.
      </div>
    );
  }
});
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        App text
        <News data={my_news} />
        <Comments />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
