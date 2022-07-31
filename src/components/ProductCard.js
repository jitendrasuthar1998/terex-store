import { connect } from "react-redux";
import {addToCart} from '../redux/actions'

const ProductCard = ({ item, addToCart, cartItems }) => {
    return (
        <div style={{ width: '100%', border: '5px solid lightgrey', padding: 10, height: '100%', maxWidth: '300px' }}>
            <div>
                <img src={item.imageURL} height={200} width={'100%'} style={{ objectFit: 'contain' }} alt="productImage"/>
            </div>
            <div style={{ padding: 10 }}>
                {item.name}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, height: 30, }}>
                <div style={{ marginRight: 10, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Rs. {item.price}
                </div>
                <button onClick={()=> addToCart(cartItems, item)}>Add to cart</button>
            </div>
        </div>
    )
}

// export default ProductCard;



const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
  });
  
export default connect(mapStateToProps, { addToCart })(ProductCard);
  

