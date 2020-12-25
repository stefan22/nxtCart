import Link from 'next/link';
import './styles.scss';

export default function Header() {
    return (
        <header className="header">
            <Link title="company name" href="/">
                <h1 className="header__title">Fencestack</h1>
            </Link>
            <a 
                className="header__summary snipcart-checkout snipcart-summary"
                href="#"
                style={{ textDecoration: "none" }}>
                {/* cart */}
                
                <ion-icon name="cart" size='large'></ion-icon>
                <span
                    className="header__price snipcart-total-price">
                </span>
            </a>
        </header>
    )

}