import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import products from '../products.json'
import CheckBoxProton from '../components/CheckBoxProton'
import SearchBar from '../components/SearchBar'

import './home.css'
import Header from '../components/Header'

const Home = () => {



    const [color, setColor] = useState([
        { id: 1, label: 'Red', checked: false },
        { id: 2, label: 'Blue', checked: false },
        { id: 3, label: 'Green', checked: false },
        { id: 4, label: 'Black', checked: false }
    ])
    const [gender, setGender] = useState([
        { id: 1, label: 'Men', checked: false },
        { id: 2, label: 'Women', checked: false },
    ])
    // const [price, setPrice ] = useState([
    //     {id: 1, label:'0-Rs250', minPrice: 0, maxPrice: 250 ,checked: false},
    //     {id: 2, label:'Blue', checked: false},
    //     {id: 3, label:'Green', checked: false}
    // ])

    const [type, setType] = useState([
        { id: 1, label: 'Polo', checked: false },
        { id: 2, label: 'Hoodie', checked: false },
        { id: 3, label: 'Basic', checked: false }
    ])

    const handleColorChecked = id => {
        const colorStateList = color;
        const changeCheckedColors = colorStateList.map(item => item.id === id ? {
            ...item, checked: !item.checked
        }
            :
            item
        )

        setColor(changeCheckedColors)

    }

    const [allProducts, setAllProducts] = useState(products)
    const [inputText, setInputText] = useState("")
    const handleGenderChecked = id => {
        const genderStateList = gender;
        const changeCheckedGender = genderStateList.map(item => item.id === id ? {
            ...item, checked: !item.checked
        }
            :
            item
        )

        setGender(changeCheckedGender)

    }

    const handleTypeChecked = id => {
        const typeStateList = type;
        const changeCheckedType = typeStateList.map(item => item.id === id ? {
            ...item, checked: !item.checked
        }
            :
            item
        )
        setType(changeCheckedType)

    }

    const filterProducts = () => {
        let updatedProductList = products;

        const colorChecked = color.filter(item => item.checked).map(item => item.label.toLowerCase());
        console.log(`colorChecked array is == ${JSON.stringify(colorChecked)}`)
        
        if(colorChecked.length){
            updatedProductList = updatedProductList.filter(item => colorChecked.includes(item.color.toLowerCase()))
            console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }


        const genderChecked = gender.filter(item => item.checked).map(item => item.label.toLowerCase());
        console.log(`genderChecked array is == ${JSON.stringify(genderChecked)}`)
        
        if(genderChecked.length){
            updatedProductList = updatedProductList.filter(item => genderChecked.includes(item.gender.toLowerCase()))
            console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }

        const typeChecked = type.filter(item => item.checked).map(item => item.label.toLowerCase());
        console.log(`typeChecked array is == ${JSON.stringify(typeChecked)}`)
        
        if(typeChecked.length){
            updatedProductList = updatedProductList.filter(item => typeChecked.includes(item.type.toLowerCase()))
            console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }

        if(inputText){
            updatedProductList = updatedProductList.filter(item => item.name.toLowerCase() === inputText.toLowerCase().trim() || 
            item.type.toLowerCase() === inputText.toLowerCase().trim() ||
            item.color.toLowerCase() === inputText.toLowerCase().trim()
            )
            console.log(`updatedProductList after searchInput is == ${JSON.stringify(updatedProductList)}`)
        }

        setAllProducts(updatedProductList)
    }

    useEffect(()=> {
        filterProducts()
    }, [color, gender, type, inputText])

    return (
        <>
        <Header/>
        <SearchBar value={inputText} changeInput={e => setInputText(e.target.value)}/>
        

        {/* // <div style={{ border:'5px solid red', height: '55rem', display:'flex'}}>
        // <div style={{border:'1px solid orange', height: '100%', flex:0.25,}} className="filter-panel">
        // </div>
        // <div style={{border:'1px solid orange', height: '100%', flex:0.75, overflow:false}} className="products-panel">
        // <Products/>
        // </div>    
        // </div> */}

        <Grid container style={{ border: '5px solid red', height: '55rem' }}>
                        
            <Grid item xs={0} sm={2} md={3} bgcolor="lightgreen" className='filter-panel'>
                <div className="input-group">
                    <p className='label'>
                        Colors
                    </p>
                    {
                        color.map(color => <CheckBoxProton key={color.id} obj={color} changeChecked={handleColorChecked} />)
                    }
                </div>

                <div className="input-group">
                    <p className='label'>
                        Gender
                    </p>
                    {
                        gender.map(item => <CheckBoxProton key={item.id} obj={item} changeChecked={handleGenderChecked} />)
                    }
                </div>

                <div className="input-group">
                    <p className='label'>
                        Type
                    </p>
                    {
                        type.map(item => <CheckBoxProton key={item.id} obj={item} changeChecked={handleTypeChecked} />)
                    }
                </div>
            </Grid>
            <Grid item xs={12} md={9} bgcolor="orange">
                <Products allProducts={allProducts}/>
            </Grid>
        </Grid>
        </>
    )
}

export default Home

const Products = ({allProducts}) => {
    return (
        <Grid container display={'flex'} justifyContent="center" alignItems={'center'}>

            {
                allProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} border="1px solid black" key={item.id} display={'flex'} justifyContent="center" alignItems={'center'}>
                        <ProductCard item={item} />
                    </Grid>
                ))
            }

        </Grid>
    )
}

const ProductCard = ({ item }) => {
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
                <button>Add to cart</button>
            </div>
        </div>
    )
}