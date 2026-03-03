import { Link } from "react-router-dom";
import './card.scss';
import { useCartStore } from "../../store/store";

const Card = ({ item }) => {
    const addCart = useCartStore(s => s.addCart);
    return (
        <div className="card">
            <Link to={`/product/${item.id}`}>
                <img className="card-img" src={item.image} alt="" />

                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{
                item.description.length > 50
                ? item.description.substr(0, 47).trim() + '...'
                : item.description
                }</p>
                <p className="card-text">{item.category}</p>
            </Link>
            <div className="card-block">
                <p className="card-price">${item.price}</p>
                <button onClick={()=>{
                    addCart(item);
                }}>buy</button>
            </div>
        </div>
    );
}

export default Card;
