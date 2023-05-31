import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice'

const Cart = () => {
    const cartList = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totalPrice = () => {
    return cartList.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
    )
    }
    return (
    <div className={styles.container}>
    {cartList?.length === 0 ? (
    <h4>Cart is empty</h4>
    ) : (
    <>
        <div className={styles.header}>
        <div>Image</div>
        <div>Product Name</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Actions</div>
        <div>Total Price</div>
        </div>
        {cartList?.map((item) => (
        <div className={styles.body} key={item.id}>
        <div className={styles.image}>
        <Image src={item.image_url} height="90" width="65" />
        </div>
        <p>{item.name}</p>
        <p>$ {item.price}</p>
        <p>{item.quantity}</p>
        <div className={styles.buttons}>
        <button onClick={() => dispatch(incrementQuantity(item))}>
            +
        </button>
        <button onClick={() => dispatch(decrementQuantity(item))}>
            -
        </button>
        <button onClick={() => dispatch(removeFromCart(item))}>
            x
        </button>
        </div>
        <p>$ {item.quantity * item.price}</p>
        </div>
        ))}
        <h2>Total: $ {totalPrice()}</h2>
    </>
    )}
    </div>
    )
}
export default Cart