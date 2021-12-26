import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import isEmpty from 'lodash.isempty'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { API } from '../services/API'
import { Container } from '../styles/style'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
import { RiCloseLine } from 'react-icons/ri'
import { Alert } from '../components/Alert'

type ShortedLink = {
    to: string
    shortedLink: string
}

type AlertData = {
    key: string | number
    text: string
    bg: string
    onEnd: (key: string | number) => void
}

export default function Home() {
    const [isWaitingLinkBeCreated, setIsWaitingLinkBeCreated] = useState(false)
    const [shortedLinks, setShortedLinks] = useState<ShortedLink[]>([])
    const [alerts, setAlerts] = useState<AlertData[]>([])

    const shortLinkLinkInputRef = useRef<HTMLInputElement>(null)
    const shortLinkAliasInputRef = useRef<HTMLInputElement>(null)

    function removeAlert(key: string | number) {
        console.log('removeAlert', key)
        setAlerts(alerts.filter(i => i.key !== key))
    }

    function removeLink(link: string) {
        setShortedLinks(shortedLinks.filter(l => l.shortedLink !== link))
    }

    function createAlert(text: string, bg: string) {
        setAlerts(
            [...alerts].concat({
                key: alerts.length,
                text,
                bg,
                onEnd: removeAlert,
            })
        )
    }

    async function copyLinkToClickboard(link: string) {
        await navigator.clipboard.writeText(link)
        createAlert('Link copied to clipboard', 'hsl(180, 66%, 49%)')
    }

    async function createLink(e: any) {
        e.preventDefault()

        setIsWaitingLinkBeCreated(true)

        let link = shortLinkLinkInputRef.current!.value
        const alias = shortLinkAliasInputRef.current!.value

        try {
            const r = await API.post('/link', { to: link, id: alias })
            const shortedLink = location.href + r.data.id

            if (link.length >= 48) {
                link = link.slice(0, 48) + '...'
            }

            setShortedLinks([...shortedLinks, { to: link, shortedLink }])
        } catch (e) {
            createAlert('Alias already exists', 'hsl(0, 87%, 67%)')
        }

        setIsWaitingLinkBeCreated(false)
    }

    useEffect(() => {
        if (!localStorage.getItem('shortedLinks')) {
            localStorage.setItem('shortedLinks', '[]')
        }

        setShortedLinks(JSON.parse(localStorage.getItem('shortedLinks')!))
    }, [])

    useEffect(() => {
        localStorage.setItem('shortedLinks', JSON.stringify(shortedLinks))
    }, [shortedLinks])

    return (
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />

                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
                <link rel='icon' type='image/png' href='/favicon-32x32.png' />

                <title>Shortly</title>
            </Head>

            <Container>
                {!isEmpty(alerts) && <Alert data={alerts} />}

                <Header />

                <main className='main'>
                    <section className='main__hero-section hero-section'>
                        <div className='hero-section__image-container'>
                            <img
                                className='hero-section__image-container__img'
                                src='/illustration-working.svg'
                            />
                        </div>

                        <div className='hero-section__text-container text-container'>
                            <h1 className='text-container__title'>
                                More than just shorter links
                            </h1>
                            <p className='text-container__content'>
                                Build your brand's recognition and get detailed
                                insights on how your links are performing.
                            </p>

                            <Button className='text-container__btn'>
                                Get Started
                            </Button>
                        </div>

                        <div className='hero-section__short-link-wrapper short-link'>
                            <form
                                className='short-link__form'
                                onSubmit={e => {
                                    createLink(e)
                                    shortLinkLinkInputRef.current!.value = ''
                                    shortLinkAliasInputRef.current!.value = ''
                                }}
                            >
                                <input
                                    className='short-link__form__link'
                                    type='text'
                                    placeholder='Shorten a link here...'
                                    spellCheck={false}
                                    ref={shortLinkLinkInputRef}
                                    required
                                />
                                <div className='short-link__form__input-container'>
                                    <input
                                        className='short-link__form__input-container__alias'
                                        name='alias'
                                        type='text'
                                        spellCheck={false}
                                        ref={shortLinkAliasInputRef}
                                        placeholder=' '
                                    />
                                    <label
                                        className='short-link__form__input-container__label'
                                        htmlFor='alias'
                                    >
                                        Alias
                                    </label>
                                </div>
                                <Button className='short-link__form__btn'>
                                    {isWaitingLinkBeCreated ? (
                                        <AiOutlineLoading3Quarters
                                            size={26}
                                            className='short-link__form__btn__load-icon'
                                        />
                                    ) : (
                                        'Shorten It!'
                                    )}
                                </Button>
                            </form>

                            <div className='hero-section__short-link__shorted-links shorted-links'>
                                <ul className='shorted-links__list'>
                                    {shortedLinks.map((link, index) => (
                                        <li
                                            className='shorted-links__list__item'
                                            key={index}
                                        >
                                            <div className='shorted-links__list__item__wrapper'>
                                                <span className='shorted-links__list__item__wrapper__link'>
                                                    {link.to}
                                                </span>
                                                <a
                                                    className='shorted-links__list__item__wrapper__shorted-link'
                                                    href={link.shortedLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    {link.shortedLink}
                                                </a>
                                                <MdContentCopy
                                                    className='shorted-links__list__item__wrapper__copy'
                                                    onClick={() =>
                                                        copyLinkToClickboard(
                                                            link.shortedLink
                                                        )
                                                    }
                                                    size={24}
                                                />
                                                <RiCloseLine
                                                    className='shorted-links__list__item__wrapper__remove'
                                                    onClick={() =>
                                                        removeLink(
                                                            link.shortedLink
                                                        )
                                                    }
                                                    size={32}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='main__intro-section intro-section'>
                        <div className='intro-section__content-wrapper'>
                            <h2 className='intro-section__content-wrapper__title'>
                                Advanced Statistics
                            </h2>
                            <p className='intro-section__content-wrapper__content'>
                                Track how your links are perfoming across the
                                web with our advanced statistics dashboard
                            </p>
                        </div>

                        <div className='intro-section__items'>
                            <div className='intro-section__items__item'>
                                <div className='intro-section__items__item__image-container'>
                                    <Image
                                        className='intro-section__items__item__image-container__img'
                                        src='/icon-brand-recognition.svg'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h2 className='intro-section__items__item__title'>
                                    Brand Recognition
                                </h2>
                                <p className='intro-section__items__item__content'>
                                    Boost your brand recognition with each
                                    click. Generic links don't mean a thing.
                                    Branded links help instill confidence in
                                    your content
                                </p>
                            </div>

                            <div className='intro-section__items__item'>
                                <div className='intro-section__items__item__image-container'>
                                    <Image
                                        className='intro-section__items__item__image-container__img'
                                        src='/icon-detailed-records.svg'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h2 className='intro-section__items__item__title'>
                                    Detailed Records
                                </h2>
                                <p className='intro-section__items__item__content'>
                                    Gain insights into who is clicking your
                                    links. Knowing when and where people engage
                                    with your content helps inform better
                                    decisions.
                                </p>
                            </div>

                            <div className='intro-section__items__item'>
                                <div className='intro-section__items__item__image-container'>
                                    <Image
                                        className='intro-section__items__item__image-container__img'
                                        src='/icon-fully-customizable.svg'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h2 className='intro-section__items__item__title'>
                                    Fully Customizable
                                </h2>
                                <p className='intro-section__items__item__content'>
                                    Improve brand awareness and content
                                    discoverability through customizable links,
                                    supercharging audience engagement.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='main__boost-section boost-section'>
                        <h2 className='boost-section__title'>
                            Boost your links today
                        </h2>
                        <Button className='boost-section__btn'>
                            Get Started
                        </Button>
                    </section>
                </main>
                <footer className='footer'>
                    <div className='footer__wrapper'>
                        <h2 className='footer__wrapper__title'>Shortly</h2>

                        <nav className='footer__wrapper__nav'>
                            <div className='footer__wrapper__nav__item'>
                                <h4 className='footer__wrapper__nav__item__title'>
                                    Features
                                </h4>
                                <ul className='footer__wrapper__nav__item__list'>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Link Shortening</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Branded Links</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Analytics</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__wrapper__nav__item'>
                                <h4 className='footer__wrapper__nav__item__title'>
                                    Resources
                                </h4>
                                <ul className='footer__wrapper__nav__item__list'>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Blog</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Developers</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__wrapper__nav__item'>
                                <h4 className='footer__wrapper__nav__item__title'>
                                    Company
                                </h4>
                                <ul className='footer__wrapper__nav__item__list'>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>About</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Our Team</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Careers</Link>
                                    </li>
                                    <li className='footer__wrapper__nav__item__list__item'>
                                        <Link href='#/'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className='footer__icons-wrapper'>
                            <div className='footer__icons-wrapper__icon-container'>
                                <a href='#/'>
                                    <Image
                                        src='/icon-facebook.svg'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                            <div className='footer__icons-wrapper__icon-container'>
                                <a href='#/'>
                                    <Image
                                        src='/icon-twitter.svg'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                            <div className='footer__icons-wrapper__icon-container'>
                                <a href='#/'>
                                    <Image
                                        src='/icon-pinterest.svg'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                            <div className='footer__icons-wrapper__icon-container'>
                                <a href='#/'>
                                    <Image
                                        src='/icon-instagram.svg'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </>
    )
}
