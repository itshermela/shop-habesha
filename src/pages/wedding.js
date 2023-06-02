import React from 'react'
import Allproducts from '../../components/AllProducts'
import { XataClient } from '../../src/xata'

const wedding = ({AllweddingProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllweddingProducts?.map(product => (
                <Allproducts 
                    id={product.id}
                    url={product.image_url}
                    name={product.name}
                    price={product.price}
                    categoryName={product.category.name}
                />
            ))}
        </div>
      )
}

const xata = new XataClient()
export const getServerSideProps = async () => {
    const response = await xata.db.product.filter({"category.name": "Wedding"}).getMany()
    return {
    props: {
        AllweddingProducts: response
    }
    }
}

export default wedding
