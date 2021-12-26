import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    width: 90%;

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    .header-desktop {
        display: none;
        flex-direction: row;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: max(300px, 20rem);

            span {
                display: none;
            }

            button {
                margin-left: auto;
            }

            li a {
                font-weight: 600;
                color: var(--grayish-violet);
                font-size: 1.1rem;
                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.7);
                }
            }
        }
    }

    .header-mobile {
        position: absolute;
        top: 5.5rem;
        left: 0;

        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 1rem;

        display: none;
        z-index: 1;

        &--active {
            display: flex;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            background: var(--secondary);
            border-radius: 8px;
            padding: 2.2rem;

            *:not(:last-child) {
                margin-bottom: 1.5rem;
            }

            li a {
                color: white;
                font-weight: 700;
                font-size: 1.2rem;
            }

            span {
                background: #544b6c;
                width: 100%;
                height: 1px;
            }

            button {
                width: 100%;
                
            }

            > button:nth-child(1) {
                width: auto;
                background: transparent;
            }
        }
    }
    div {
        margin-left: auto;
        display: none;
    }

    @media (min-width: 850px) {
        justify-content: flex-start;
        width: min(1280px, 95%);

        .header-desktop {
            display: flex;
        }

        .burger-menu-icon {
            display: none;
        }

        div {
            display: flex;

            button:first-child {
                background: transparent;
                color: var(--grayish-violet);
            }
        }
    }
`
