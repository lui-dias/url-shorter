import Link from 'next/link'
import { Container } from './style'

export function Logo() {
    return (
        <Link href="#/">
            <Container>
                Shortly
            </Container>
        </Link>
    )
}