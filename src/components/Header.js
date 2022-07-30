import React from 'react'

const Header = () => {
  return (
    <div style={{height: 40, width: '100%', border: '1px solid black', display:'flex'}}>
        <div style={{flex:1,  alignItems:"center", display:'flex',paddingLeft:10}}>
         Terex Store
        </div>
        <div style={{flex:1,  flexDirection:'row', display:"flex", alignItems:'center', justifyContent:'flex-end'}}>
            <div style={{width:100, height: 30, display:'flex', justifyContent:'center', alignItems:'center', background:'red', marginRight:30}}>
                Products
            </div>
            <div style={{width:50, height: 30, display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header