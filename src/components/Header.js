import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import { connect } from 'react-redux';

const Header = ({cartItems}) => {
  return (
    <div style={{ height: 40, width: '100%', border: '1px solid black', display: 'flex' }}>
      <div style={{ flex: 1, alignItems: "center", display: 'flex', paddingLeft: 10 }}>
        Terex Store
      </div>
      <div style={{ flex: 1, flexDirection: 'row', display: "flex", alignItems: 'center', justifyContent: 'flex-end' }}>
        <Link to="/" className='link'>
          <div style={{ width: 100, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgrey', marginRight: 30 }}>
            Products
          </div>
        </Link>
        <div style={{ width: 50, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
          <Link to="/cart"  className='link'>
            Cart {" "} {cartItems.length}
          </Link>
        </div>
      </div>
    </div>
  )
}

// export default Header

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, null)(Header);

