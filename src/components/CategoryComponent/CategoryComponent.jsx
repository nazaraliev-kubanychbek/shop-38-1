import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card';
import { Link } from "react-router-dom";

const CategoryComponent = ({ category = '', limit = 0 }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([])
        axios(
            limit > 0
                ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
                : `https://fakestoreapi.com/products/category/${category}`
        )
            .then(({ data }) => setProducts(data));
    }, [category, limit])
    return (
        <section>
            <div className="container">
                <h2>
                    <Link to={`/category/${category}`}>{category}</Link>
                </h2>
                <br />
                <div className="row">
                    {
                        products.map(item => {
                            return <div key={item.id} className="col-3">
                                <Card item={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default CategoryComponent;
