import { Container as HeaderContainer } from './styles'
import { Nav, Inner } from 'components'
import Link from 'next/link'    

const Header = () => {
    return(
        <Inner>
            <HeaderContainer>
                    <Link href="/">
                        <a>
                            <img src="/logo.svg" alt="Minimal.ar Logo" className="logo" />
                        </a>
                    </Link>
                    <Nav />
            </HeaderContainer>
        </Inner>
    )
}

export default Header;