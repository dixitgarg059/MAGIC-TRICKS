import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import LOGIC from './components/secret.component'
import  PLAY from './components/play.component'
import WELCOME from './components/welcome.component'
import GAME1 from './components/game1.component'
import GAME2 from './components/game2.component'
import GAME3 from './components/game3.component'
import GAME4 from './components/game4.component'
import LOGIC1 from './components/logic1.component'
import LOGIC2 from './components/logic2.component'
import LOGIC3 from './components/logic3.component'
import LOGIC4 from './components/logic4.component'
// import Customer from './components/customer.component'
// import Products from './components/products.component'
// import Add_Products from './components/add_products.component'
// import SEARCH_PRODUCT from './components/customer-search-product.component'
// import ORDER_PRODUCT from './components/customer-order-product.component'
// import LIST_PRODUCT from './components/customer-list-product.component'
// import READY_PRODUCT from './components/ready-product.component.js'
// import EDIT_PRODUCT from './components/customer-edit-product.component'
// import PRODUCT_REVIEW from './components/customer-product-review.component'
// import DISPATCHED_PRODUCT from './components/dispatched-products.component'
// import RATE_VENDOR from './components/customer-rate-vendor.component'
// import Customer from './components/customer.component'
// import SEARCH_PRODUCT from  './components/customer-search-product.component' 
import Searched_Products from './components/searched-product.component'
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/Play" className="nav-link">Play</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={WELCOME}/>
        <Route path="/Play" exact component={PLAY}/>
        <Route path="/Logic" exact component={LOGIC}/>
        <Route path="/Play/Game1" exact component={GAME1}/>
        <Route path="/Play/Game2" exact component={GAME2}/>
        <Route path="/Play/Game3" exact component={GAME3}/>
        <Route path="/Play/Game4" exact component={GAME4}/>
        <Route path="/Play/Game1/Logic" exact component={LOGIC1}/>
        <Route path="/Play/Game2/Logic" exact component={LOGIC2}/>
        <Route path="/Play/Game3/Logic" exact component={LOGIC3}/>
        <Route path="/Play/Game4/Logic" exact component={LOGIC4}/>
        {/* <Route path="/login/vendor/products" exact component={Products}/>
        <Route path="/login/vendor/add-products" exact component={Add_Products}/> 
        <Route path="/login/customer" exact component={Customer}/>
        <Route path="/login/customer/search-products" exact component={SEARCH_PRODUCT}/>  */}

        {/* <Route path="/login/customer/search-products" exact component={SEARCH_PRODUCT}/> */}
        {/* <Route path="/login/customer/search-products/products" exact component={Searched_Products}/> 
        <Route path="/login/customer/search-products/products/order" exact component={ORDER_PRODUCT}/>
        <Route path="/login/customer/list-products" exact component={LIST_PRODUCT}/>
        <Route path="/login/vendor/ready_products" exact component={READY_PRODUCT}/>
        <Route path="/login/customer/list-products/edit-product" exact component={EDIT_PRODUCT}/>
        <Route path="/login/customer/list-products/product-review" exact component={PRODUCT_REVIEW}/>
        <Route path="/login/vendor/dispatched_products" exact component={DISPATCHED_PRODUCT}/>
        <Route path="/login/customer/list-products/rate-vendor" exact component={RATE_VENDOR}/> */}
        {/* pathname:'/login/customer/search-product/products', */}

      </div>
    </Router>
  );
}

export default App;
