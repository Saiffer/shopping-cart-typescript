import {Wrapper} from './Cart.styles'
import CartItem from '../CartItem/CartItem'
import {CartItemType} from '../App'
import Item from '../Item/Item'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickeItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {

    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)


    return(
        <Wrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Cart is empty</p> : null}
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;