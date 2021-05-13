import React from 'react'
import './App.css';
import './styles/home.css';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: []
    }
  }

  addToCart = (product) => {
    const cartItems = [...this.state.cartItems]
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true
      }
    })

    if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }

    this.setState({
      cartItems
    })
  }

  sortProducts = (e) => {

    let value = e.target.value
    this.setState(state => ({
      sort: value,
      products: this.state.products.slice().sort((a,b) => (
        value === 'lowest' ?
        (a.price > b.price) ? 1 : -1 :
        value === 'highest' ?
        (a.price < b.price) ? 1 : -1 :
        (a._id > b._id) ? 1 : -1
      ))
    }))
  }

  filterProducts = (e) => {
    if(e.target.value === ''){
      this.setState({
        size: e.target.value,
        product: data.products
      })
    }
    else{
      this.setState({
        size: e.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) !== -1)
      })
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
              <Filter 
              count={this.state.products.length} 
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              />
              <Products 
              products={this.state.products} 
              addToCart={this.addToCart}
              />
            </div>
            <div className="cart-div">
              <h3>Cart</h3>
              <Cart cartItems={this.state.cartItems}/>
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
