import './header.scss';
import { Link } from 'react-router-dom';
import { useCategoryStore } from '../../store/store';

const Header = () => {
    const categories = useCategoryStore(s => s.categories);
    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className='header-logo'>
                    <Link to={'/'}>shop</Link>
                </h1>

                <nav className="header-nav">
                    <Link to={'/'}>home</Link>

                    {
                        categories.map(item => <Link
                            key={item}
                            to={`/category/${item}`}
                        >{item}</Link>)
                    }


                    <Link to={'/cart'}>cart</Link>
                </nav>
            </div>

        </header>
    );
}

export default Header;
