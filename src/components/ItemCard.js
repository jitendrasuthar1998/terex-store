import { Grid } from "@mui/material"
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const ItemCard = ({ item, cartItems }) => {

    const dispatch = useDispatch()

    return (
      <Grid item sm={8} md={10} xs={12}  display={"flex"} flexDirection="row" border="1px solid lightgrey" mt={2} mb={2} p={2}>
        <div style={{ flex: 0.2, }}>
          <img src={item.imageURL} height={100} width={100} alt={item.name} />
        </div>
        <div style={{ flex: 0.35,  display: 'flex', justifyContent: 'center', paddingLeft: 10, flexDirection: 'column' }}>
          <p style={{ fontWeight: 'bold' }}>{item.name}</p>
          <p>Rs.{item.price}</p>
        </div>
        <div style={{ flex: 0.25,  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Qty: {item.count}</p>
        </div>
        <div style={{ flex: 0.2,  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{ width: '90%', height: "30%" }} onClick={() => dispatch(removeFromCart(cartItems, item))}>Delete</button>
        </div>
      </Grid>
    )
}

export default ItemCard;