import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
const Products = ({allProducts}) => {

   
    return (
        <Grid container display={'flex'} justifyContent="center" alignItems={'center'}>

            {
                allProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} mb={2} key={item.id} display={'flex'} justifyContent="center" alignItems={'center'}>
                        <ProductCard item={item} />
                    </Grid>
                ))
            }

        </Grid>
    )
}

export default Products;