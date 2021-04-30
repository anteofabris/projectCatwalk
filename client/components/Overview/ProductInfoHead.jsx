import React from 'react';

class ProductInfoHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starArray: null,
      numberOfReviews: this.props.numberOfReviews
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.numberOfReviews !== prevProps.numberOfReviews) {
      this.setState({
        numberOfReviews: this.props.numberOfReviews
      })
    }
  }

  render() {
    console.log('Number of reviews: ', this.state.numberOfReviews)


    if (this.props.stars) {

      var numArray = []
      var newNum = this.props.stars
      for (var i = 1; i <= 5; i++) {
        if (newNum >= 1) {
          numArray.push(1);
        } else if (newNum < 1 && newNum > 0) {
          numArray.push(newNum);
        } else {
          numArray.push(0);
        }
        newNum--;
      }

      if (this.props.salePrice) {

        return (<div>
          <a id="af-read-reviews" onClick={() => {
            window.scrollTo({
              top: 2450,
              left: 0,
              behavior: 'smooth'
            });
          }}> Read all {this.state.numberOfReviews} reviews! </a>
          <span id="af-stars">
            {numArray.map((num, index) => {
              if (num === 1 || num > 0.872) {
                return <div id="af-full-star" key={index}>1</div>
              } else if (num >= 0.63 && num <= 0.872) {
                return <div id="af-three-quarter-star" key={index}>0.75</div>
              } else if (num > 0.38 && num <= 0.62) {
                return <div id="af-half-star" key={index}>0.5</div>
              } else if (num >= 0.12 && num <= 0.38) {
                return <div id="af-quarter-star" key={index}>0.25</div>
              } else {
                return <div id="af-empty-star" key={index}>0</div>
              }
            })
            }
          </span>
          <h3 className="af_prodName">{this.props.name}</h3>
          <h5>{this.props.slogan}</h5>
          <em id="af-strikethrough">${this.props.price}</em> On sale!
          <em> ${this.props.salePrice}</em> <br />
     {this.props.styleName}
        </div>)

      } else {
        return (<div>
          <a id="af-read-reviews" onClick={() => {
            window.scrollTo({
              top: 2450,
              left: 0,
              behavior: 'smooth'
            });
          }}> Read all {this.state.numberOfReviews} reviews! </a>
          <span id="af-stars">
            {numArray.map((num, index) => {
              if (num === 1 || num > 0.872) {
                return <div id="af-full-star" key={index}>1</div>
              } else if (num >= 0.63 && num <= 0.872) {
                return <div id="af-three-quarter-star" key={index}>0.75</div>
              } else if (num > 0.38 && num <= 0.62) {
                return <div id="af-half-star" key={index}>0.5</div>
              } else if (num >= 0.12 && num <= 0.38) {
                return <div id="af-quarter-star" key={index}>0.25</div>
              } else {
                return <div id="af-empty-star" key={index}>0</div>
              }
            })
            }
          </span>
          <h3 className="af_prodName">{this.props.name}</h3>
          <h5>{this.props.slogan}</h5>
          <em>${this.props.price}</em> <br />
          {this.props.styleName}
        </div>)
      }
    } else {
      if (this.props.salePrice) {

        return (<div>
          <h3 className="af_prodName">{this.props.name}</h3>
          <h5>{this.props.slogan}</h5>
          <em id="af-strikethrough">${this.props.price}</em> On Sale!
          <em> ${this.props.salePrice}</em> <br />
      {this.props.styleName}
        </div>)
      } else {
        return (<div>
          <h3 className="af_prodName">{this.props.name}</h3>
          <h5>{this.props.slogan}</h5>
          <em>${this.props.price}</em> <br />
          {this.props.styleName}
        </div>)
      }
    }

  }
}

export default ProductInfoHead;