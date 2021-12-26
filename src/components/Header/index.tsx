import Link from 'next/link'
import { Container } from './style'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Header() {
    function toggleBurgerMenu() {
        document.querySelector('.header-mobile')!.classList.toggle('header-mobile--active')
    }
    return (
        <Container>
            <Logo />

            <GiHamburgerMenu
                className="burger-menu-icon"
                size={26}
                color="var(--gray)"
                onClick={toggleBurgerMenu}
            />

            <nav className="header-mobile">
                <ul>
                    <li>
                        <Link href="/">Features</Link>
                    </li>
                    <li>
                        <Link href="/">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/">Resources</Link>
                    </li>
                    <span></span>
                    <li>
                        <Link href="/">Login</Link>
                    </li>
                    <Button>Sign Up</Button>
                </ul>
            </nav>

            <nav className="header-desktop">
                <ul>
                    <li>
                        <Link href="/">Features</Link>
                    </li>
                    <li>
                        <Link href="/">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/">Resources</Link>
                    </li>
                    <span></span>
                </ul>
            </nav>

            <div>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </Container>
    )
}
