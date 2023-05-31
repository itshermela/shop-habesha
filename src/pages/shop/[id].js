import { XataClient } from '../../../src/xata'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/ProductDetails.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'

const ProductDetails = ({ item }) => {
    const dispatch = useDispatch()
    return (
    <div className={styles.wrapper}>
    <Link legacyBehavior href="/shop">
    <a className={styles.link}>Go to shop</a>
    </Link>
    <div className={styles.container}>
    <Image
        src={item.image_url}
        width={400}
        height={450}
    />
    <div className={styles.details}>
        <p><span className={styles.title}>Name: </span>{item.name}</p>
        <p><span className={styles.title}>Description: </span>{item.description}</p>
        <p className={styles.price}><span className={styles.title}>Price: </span>${item.price}</p>
        <p className={styles.category}><span className={styles.title}>Category: </span>{item.category.name}</p>
        <div className={styles.button}>
        <button
        onClick={() => dispatch(addToCart(item))}
        >
        Add to cart
        </button>
        </div>
    </div>
    </div>
    </div>
    )
}
const xata = new XataClient()
export const getServerSideProps = async(context) => {
    const products = await xata.db.product.select(["*", "category.*"]).getAll()
    const item = products.find((product) => product.id === context.params.id)
    return {
    props: {
    item
    }
    }
}
export default ProductDetails