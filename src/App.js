import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import Navigation from './Navbar';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      isLoading: true
    }
  }


  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=11ded9cb17864dc29ba4af514a07be56")
    .then(response => response.json())
    .then(data => this.setState({ articles: data.articles, isLoading: false }))
  }

  render() {
    const { articles, isLoading } = this.state
    console.log({ articles });

    if(isLoading) {
      return <h2>Loading....</h2>
    }

      return (
        <div>
          <Navigation />
          <div className='flex-parent'>
            { articles.map((article, index) =>
              <div className='flex-child'>
                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={article.urlToImage} />
                  <Card.Body>
                    <Card.Title> {article.title} </Card.Title>
                    <Card.Text> {article.description} </Card.Text>
                    <a href={article.url} className="btn btn-outline-primary">Read More</a>
                  </Card.Body>
                </Card>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
