import React, { createContext, useContext, useState } from 'react'
import AboutPage from './Roots/AboutPage'
import HomePage from './Roots/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Roots/LoginPage'
import ItemView from "./Roots/ItemView"
import { loginInfo } from '../../App'
import CartComponent from './Roots/CartComponent'
import Registration from './Roots/RegistionPage'



export const cartContext = createContext()
function NavigationRoot() {

    const loginFlag = useContext(loginInfo)
    const [cart,setCart]=useState([])
    const addItemToCart = (item) => {
        setCart([...cart, item])
    }
    return (
        <BrowserRouter>
            {loginFlag.login ?
                <cartContext.Provider value={{ cart, addItemToCart }}>
                    <Routes>
                        
                        
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/product/:id' element={<ItemView />} />
                        <Route path='/cart/:id' element={<CartComponent/>}/>

                    </Routes>
                </cartContext.Provider>
                :
                <Routes>
                    
                    <Route path='/' element={<LoginPage />}></Route>
                    <Route path='/registration' element={<Registration/>}/>
                   
                </Routes>
            }

        </BrowserRouter>
    )
}

export default NavigationRoot