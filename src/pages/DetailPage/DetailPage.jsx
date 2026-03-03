import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './detail.scss';
import { useCartStore } from '../../store/store';

const DetailPage = () => {
    const addCart = useCartStore(s => s.addCart);
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setProduct(data))
    }, [])
    return (
        <main>
            <section className='detail'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={product.image} alt="" className="detail-img" />
                        </div>
                        <div className="col-6">
                            <h2 className='detail-title'>{product.title}</h2>
                            <p className="detail-text">{product.description}</p>
                            <p className="detail-text">{product.category}</p>
                            <p className="detail-price">{product.price}</p>

                            <button onClick={()=>{
                                addCart(product)
                            }}>buy</button>
                            <button onClick={()=>{
                                navigate(-1)
                            }}>go back</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DetailPage;
