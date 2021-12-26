import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 765px;
        left: 0;
        background: var(--sweet-white);
        width: 100%;
        height: 67%;
        z-index: -1;
    }

    header {
        margin-top: 2rem;
    }

    .main {
        width: 100%;

        &__hero-section,
        .hero-section {
            display: flex;
            flex-direction: column;
            align-items: center;

            &__image-container {
                width: min(400px, 95%);
                position: relative;
                height: 25rem;
                overflow: hidden;
                margin-top: 2rem;

                &__img {
                    position: absolute;
                    width: 130%;
                    height: 100%;

                    left: 2rem;
                    top: 0;
                }
            }

            &__text-container,
            .text-container {
                display: flex;
                flex-direction: column;
                align-items: center;

                &__title {
                    text-align: center;
                    font-size: 3rem;
                    line-height: 1.1;
                    margin-top: 3rem;
                }

                &__content {
                    text-align: center;
                    color: var(--grayish-violet);
                    margin-top: 1rem;
                    font-size: 1.3rem;
                    line-height: 1.6;
                    width: min(600px, 95%);
                }

                &__btn {
                    margin-top: 2rem;
                    width: 15rem;
                    font-size: 1.4rem;
                }
            }

            &__short_link,
            .short-link {
                display: flex;
                flex-direction: column;
                align-items: center;

                &__form {
                    margin-top: 7rem;
                    background: var(--very-dark-blue);
                    border-radius: 8px;
                    padding: 1.8rem 1.9rem;
                    width: min(500px, 95%);
                    position: relative;
                    background: var(--secondary);
                    overflow: hidden;

                    display: grid;
                    column-gap: 3%;
                    grid-template:
                        'link alias' 1fr
                        'btn btn' 1fr / 65% 33%;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 30%;
                        background: url(bg-shorten-mobile.svg);
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        width: 70%;
                        height: 80%;
                    }

                    * {
                        z-index: 1;
                    }

                    &__link,
                    &__input-container__alias {
                        width: 100%;
                        border-radius: 6px;
                        grid-area: link;

                        padding: 1rem;
                        margin-bottom: 1rem;
                        font-family: Poppins, sans-serif;
                        font-size: 1.2rem;
                        font-weight: 500;
                        color: var(--grayish-violet);

                        &::placeholder {
                            color: var(--grayish-violet);
                        }
                    }

                    &__input-container {
                        position: relative;

                        &__alias {
                            grid-area: alias;
                            margin-bottom: 0;
                            font-size: 1.2rem;

                            &:not(:placeholder-shown) {
                                + label {
                                    display: none;
                                }
                            }
                        }
                        
                        &__label {
                            font-size: 1.2rem;
                            position: absolute;

                            top: 22%;
                            left: 10%;

                            transition: 0.2s;
                            color: var(--grayish-violet);
                            pointer-events: none;
                        }
                    }

                    &__btn {
                        width: 100%;
                        border-radius: 6px;
                        font-size: 1.3rem;
                        grid-area: btn;

                        &__load-icon {
                            animation: spin 2s linear infinite;

                            position: absolute;
                            left: calc(50% - 13px);
                            top: calc(50% - 13px);
                        }
                    }
                }

                &__shorted-links,
                .shorted-links {
                    margin-top: 2rem;
                    background: var(--secondary);

                    width: min(500px, 95%);
                    border-radius: 8px;
                    overflow-y: hidden;

                    &__list {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        width: 100%;
                        max-height: 28rem;
                        overflow-y: scroll;

                        &__item {
                            width: 100%;

                            padding: 2rem;

                            font-family: Poppins, sans-serif;
                            font-size: 1.1rem;
                            position: relative;

                            &:nth-child(even) {
                                background: #42365f;
                            }

                            &__wrapper {
                                display: grid;
                                gap: 1rem 1.5rem;
                                grid-template:
                                    'link link link' 1fr
                                    'shorted-link copy remove' 1fr / 1fr 1fr 1fr;

                                &__link {
                                    color: rgba(255, 255, 255, 0.8);
                                    grid-area: link;
                                    font-size: 1rem;
                                }

                                &__shorted-link {
                                    color: var(--primary);
                                    filter: drop-shadow(
                                            0 0 0.05rem var(--primary)
                                        )
                                        brightness(1.2);
                                    grid-area: shorted-link;
                                    text-decoration: underline;
                                }

                                &__copy {
                                    color: white;
                                    grid-area: copy;
                                    filter: drop-shadow(0 0 0.05rem white);

                                    position: relative;
                                    top: -2px;
                                    cursor: pointer;

                                    justify-self: center;
                                }

                                &__remove {
                                    color: white;
                                    grid-area: remove;
                                    filter: drop-shadow(0 0 0.05rem white);

                                    position: relative;
                                    top: -6px;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

        &__intro-section,
        .intro-section {
            margin-top: 1rem;
            width: 100%;
            background: var(--sweet-white);
            position: relative;

            &__content-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 auto;
                position: relative;
                padding: 2rem 2rem 6rem 2rem;
                width: min(600px, 100%);

                &__title {
                    margin-top: 3.5rem;
                    font-size: 1.7rem;
                }

                &__content {
                    margin-top: 1rem;
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: var(--grayish-violet);
                    text-align: center;
                }
            }

            &__items {
                position: relative;
                padding-bottom: 5rem;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: calc(50% - 4px);
                    width: 8px;
                    height: calc(100% - 6rem);
                    background: var(--primary);
                }

                &__item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 auto;
                    position: relative;
                    padding: 2rem;
                    width: min(450px, 100%);
                    background: white;

                    &:not(:last-child) {
                        margin-bottom: 6.5rem;
                    }

                    &__image-container {
                        background: var(--very-dark-violet);
                        padding: 1.7rem;
                        position: absolute;
                        top: -3rem;
                        border-radius: 50%;
                        width: auto;
                        display: flex;
                    }

                    &__title {
                        margin-top: 3.5rem;
                        font-size: 1.7rem;
                    }

                    &__content {
                        margin-top: 1rem;
                        font-size: 1.2rem;
                        line-height: 1.8;
                        color: var(--grayish-violet);
                        text-align: center;
                    }
                }
            }
        }
    }

    &__boost-section,
    .boost-section {
        background: var(--secondary);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 7rem 0;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(/bg-boost-mobile.svg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        * {
            z-index: 1;
        }

        &__title {
            font-size: 2rem;
            color: white;
            margin-bottom: 1.5rem;
            z-index: 1;
        }

        &__btn {
            width: 15rem;
            font-size: 1.4rem;
        }
    }

    .footer {
        background: var(--very-dark-violet);
        padding: 4rem 0;

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &__title {
                font-size: 2.2rem;
                color: white;
                margin-bottom: 1rem;
            }

            &__nav {
                margin-bottom: 3rem;

                &__item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 3rem;

                    &__title {
                        font-size: 1.2rem;
                        color: white;
                        margin-bottom: 1.5rem;
                        font-weight: 500;
                    }

                    &__list {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        &__item {
                            &:not(:last-child) {
                                margin-bottom: 0.7rem;
                            }

                            a {
                                color: var(--gray);
                                font-size: 1.2rem;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }
        &__icons-wrapper {
            display: flex;
            justify-content: space-between;
            width: clamp(150px, 50%, 300px);
            margin-top: 1rem;
            position: relative;

            &__icon-container {
                position: relative;

                width: 2rem;
                height: 2rem;
            }
        }
    }

    @media (min-width: 1025px) {
        width: 100%;

        .main {
            &__hero-section,
            .hero-section {
                margin: 0 auto;
                width: min(1280px, 95%);
                display: grid;
                margin-top: 5rem;

                grid-template:
                    'info img' 0fr
                    'short short' 0fr / 1fr 1fr;

                &__image-container {
                    grid-area: img;
                    margin-top: 0;

                    width: 100%;

                    &__img {
                        width: 100%;
                        left: 3rem;
                    }
                }

                &__text-container,
                .text-container {
                    grid-area: info;
                    align-items: flex-start;

                    &__title,
                    &__content {
                        text-align: start;
                    }

                    &__title {
                        font-size: 4rem;
                    }
                }

                &__short_link,
                .short-link {
                    width: 100%;
                    grid-area: short;

                    margin-top: 0;
                    padding: 3rem 0;

                    display: flex;

                    &__form {
                        width: 100%;
                        display: flex;
                        column-gap: 1%;

                        &::before {
                            width: 100%;
                            height: 100%;
                            background: url(bg-shorten-desktop.svg);
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            left: 0;
                        }

                        &__link,
                        &__input-container__alias {
                            width: 64%;
                            margin-bottom: 0;
                            font-size: 1rem;
                            padding: 1rem 2rem;
                        }

                        &__input-container {
                            width: 20%;

                            &__alias {
                                width: 100%;
                                padding: 1.2rem 1rem 0.8rem;

                                &:focus,
                                &:not(:placeholder-shown) {
                                    + label {
                                        display: initial;
                                        top: 10%;
                                        font-size: 0.8rem;
                                    }
                                }

                                + label {
                                    left: 6.9%;
                                    top: 28%;
                                    font-size: 1rem;
                                }
                            }
                        }

                        &__btn {
                            width: 15%;
                            margin-top: 0;
                            font-size: 1rem;
                        }
                    }

                    &__shorted-links,
                    .shorted-links {
                        width: 100%;

                        &__list {
                            &__item {
                                padding-bottom: 1rem;

                                &__wrapper {
                                    display: flex;

                                    &__shorted-link {
                                        margin-left: auto;
                                        text-decoration: none;
                                    }

                                    &__copy {
                                        width: 1.8rem;
                                        height: 1.8rem;
                                    }

                                    &__remove {
                                        width: 2.5rem;
                                        height: 2.5rem;

                                        top: -8px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &__intro-section,
            .intro-section {
                width: min(1280px, 95%);
                margin: 0 auto;
                padding-bottom: 8rem;

                &__content-wrapepr {
                    &__title {
                        font-size: 2.5rem;
                        margin-top: 0;
                    }
                }

                &__items {
                    display: flex;
                    padding: 0;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    margin-top: 3rem;

                    &::before {
                        width: 100%;
                        left: 0;
                        height: 8px;
                        top: 45%;
                    }

                    &__item {
                        width: 31.3%;
                        margin: 0;
                        align-items: flex-start;
                        position: relative;

                        &:nth-child(1) {
                            top: -2.5rem;
                        }

                        &:nth-child(3) {
                            top: 2.5rem;
                        }

                        &:not(:last-child) {
                            margin-bottom: 0;
                        }

                        &__image-container {
                            padding: 1.5rem;
                        }

                        &__content {
                            font-size: 1rem;
                            text-align: start;
                        }
                    }
                }
            }
        }

        &__boost-section,
        .boost-section {
            &::before {
                background: url('/bg-boost-desktop.svg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
        }

        .footer {
            padding: 6rem 0;

            &__wrapper {
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;

                width: min(1280px, 95%);
                margin: 0 auto;

                &__title {
                    line-height: 0.7;
                }

                &__nav {
                    margin-left: 20%;
                    display: flex;
                    justify-content: space-between;
                    width: 30rem;

                    &__item {
                        margin-top: 0;
                        justify-content: flex-start;
                        align-items: flex-start;

                        &__list {
                            justify-content: flex-start;
                            align-items: flex-start;

                            &__item {
                                a {
                                    font-size: 1rem;
                                    transition: filter 0.2s;

                                    &:hover {
                                        filter: brightness(0.7);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &__icons-wrapper {
                margin-left: 8rem;
                margin-top: 0.2rem;
            }
        }
    }
`
