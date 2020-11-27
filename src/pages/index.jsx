import React from 'react'
import { Switch } from 'react-router-dom'
import ProductPage from './ProductPage'
import HomePage from './HomePage'

const Main = () => {
    return (
        <div>
            <Switch>
                <HomePage />
                <ProductPage />
            </Switch>
        </div>
    )
}

export default Main