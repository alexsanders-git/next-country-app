import Image from 'next/image'
import Container from './Container'
import { Logo } from './Logo'

export const Header = () => {
    return (
        <header className='p-2 shadow-md'>
            <Container>
                <Logo />
            </Container>
        </header>
    )
}
