import { Container } from './style'

type AlertData = {
    key: string | number
    text: string
    bg: string
    onEnd: (key: string | number) => void
}

type AlertProps = {
    data: AlertData[]
}

export function Alert({ data }: AlertProps) {
    function createAlert(data: AlertData) {
        let n = 0
        const c = `alert-${data.key}`

        return (
            <Container
                key={data.key}
                className={c}
                style={{ background: data.bg }}
                onAnimationEnd={() => {
                    if (n++ === 1) {
                        data.onEnd(data.key)
                    }
                }}
            >
                <div className='animated-bg'></div>
                <span>{data.text}</span>
            </Container>
        )
    }
    return <div>{data.map(createAlert)}</div>
}
