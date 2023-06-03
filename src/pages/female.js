import React from 'react'
import Allproducts from '../../components/AllProducts'
import { XataClient } from '../../src/xata'

const female = ({AllFemaleProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllFemaleProducts?.map(product => (
                <Allproducts 
                    key={product.id}
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
    const response = await xata.db.product.filter({"category.name": "Women"}).getMany()
    return {
    props: {
        AllFemaleProducts: response
    }
    }
}

export default female
