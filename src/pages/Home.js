import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import products from '../products.json'
import CheckBoxProton from '../components/CheckBoxProton'
import SearchBar from '../components/SearchBar'

import './home.css'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard.js'
import Products from '../components/Products'

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
        // console.log(`colorChecked array is == ${JSON.stringify(colorChecked)}`)
        
        if(colorChecked.length){
            updatedProductList = updatedProductList.filter(item => colorChecked.includes(item.color.toLowerCase()))
            // console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }


        const genderChecked = gender.filter(item => item.checked).map(item => item.label.toLowerCase());
        // console.log(`genderChecked array is == ${JSON.stringify(genderChecked)}`)
        
        if(genderChecked.length){
            updatedProductList = updatedProductList.filter(item => genderChecked.includes(item.gender.toLowerCase()))
            // console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }

        const typeChecked = type.filter(item => item.checked).map(item => item.label.toLowerCase());
        // console.log(`typeChecked array is == ${JSON.stringify(typeChecked)}`)
        
        if(typeChecked.length){
            updatedProductList = updatedProductList.filter(item => typeChecked.includes(item.type.toLowerCase()))
            // console.log(`updatedProductList is == ${JSON.stringify(updatedProductList)}`)
        }

        if(inputText){
            updatedProductList = updatedProductList.filter(item => item.name.toLowerCase() === inputText.toLowerCase().trim() || 
            item.type.toLowerCase() === inputText.toLowerCase().trim() ||
            item.color.toLowerCase() === inputText.toLowerCase().trim()
            )
            // console.log(`updatedProductList after searchInput is == ${JSON.stringify(updatedProductList)}`)
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
        
        <Grid container style={{ height: '55rem' }}>
                        
            <Grid item xs={0} sm={2} md={3} className='filter-panel' border="5px solid lightgrey" pl={2} pr={2}>
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
            <Grid item xs={12} md={9}>
                <Products allProducts={allProducts}/>
            </Grid>
        </Grid>
        </>
    )
}

export default Home