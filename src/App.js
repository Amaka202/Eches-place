import React from 'react'
import './App.css';
import './styles/home.css';
import data from './data.json';
import Products from './components/Products';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

  render (){
    return (
      <div className="app-container">
        <header>
          <a href="/">Eche's Place</a>
        </header>
        <main>
          <h1>Products</h1>
          <div className="display-products">
            <div className="products-div">
              <h3>Products</h3>
              <Products products={this.state.products}/>
            </div>
            <div className="cart">
              <h3>Cart</h3>
            </div>
          </div>
        </main>
        <footer>
          <p>All rights reserved </p>
        </footer>
      </div>
    );

  }
}

export default App;
