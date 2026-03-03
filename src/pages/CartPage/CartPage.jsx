import './cart.scss';
import { useCartStore } from '../../store/store';

const CartPage = () => {
    const products = useCartStore(s => s.products);
    const addCart = useCartStore(s => s.addCart);
    const decrementCart = useCartStore(s => s.decrementCart);
    const deleteCart = useCartStore(s => s.deleteCart);
    return (
        <main>
            <section className='cart'>
                <div className="container">
                    {
                        products.map(item => {
                            return <div className='cart-item' key={item.id}>
                                <div className="cart-item-left">
                                    <img src={item.image} alt="" className="cart-item-left-img" />
                                    <h3 className="cart-item-left-title">{item.title}</h3>
                                </div>
                                <div className="cart-item-right">
                                    <div className="cart-item-right-count">
                                        <button onClick={() => {
                                            addCart(item);
                                        }}>+</button>
                                        <span>{item.count}</span>
                                        <button onClick={() => {
                                            decrementCart(item)
                                        }}>-</button>
                                    </div>
                                    <p>${(item.price * item.count).toFixed(2)}</p>
                                    <button onClick={() => {
                                            deleteCart(item)
                                    }}>delete</button>
                                </div>
                            </div>
                        })
                    }

                    <p>Total: ${products.reduce((acc, rec) => {
                        return acc + (rec.count * rec.price)
                    }, 0).toFixed(2)}</p>
                </div>
            </section>
        </main>
    );
}

export default CartPage;
