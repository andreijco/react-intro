import React from 'react';
import ReactDOM from 'react-dom';
class Card extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
        <div className="card mb-3">
          <img className="card-img-top" src={this.props.img} alt={this.props.imgalt} />
          <div className="card-body">
            <h4 className="card-title">{this.props.productname}</h4>
            Price: <strong>{this.props.price}</strong>
            <p className="card-text">{this.props.desc}</p>
            <a href="#" className="btn btn-primary">Buy</a>
          </div>
        </div>
      </div>
    );
  }
}

class CardContainer extends React.Component {
  constructor(props) {
    // pass props to the parent component
    super(props);
    // initialize the state object of this component
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch('cards.json')
    .then(res => res.json())
    .then((result) => {
      this.setState({
        cards: result
      });
    });
  }

  render() {
    const cards = this.state.cards;
    //get a list of JSX elements representing each card
    let cardItems = cards.map(
      card => <Card key={card.id} {...card} />
    );
    return (
      <div className="container pt-4">
        <h3 className="text-center text-primary">Products</h3>
        <div className="row pt-4">
          {cardItems}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CardContainer/>,document.getElementById('root'));