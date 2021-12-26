import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.style!.background};

    position: fixed;

    width: 100vw;
    height: 5rem;

    left: 0;
    top: 0;

    z-index: 10;

    display: flex;
    align-items: center;

    overflow: hidden;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    animation: appear 0.3s ease-in-out, fade-out 3s ease-in-out;

    span {
        z-index: 10;
        margin-left: 3rem;
        color: white;
        font-size: 1rem;
    }

    @keyframes appear {
        0% {
            left: 100%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media (min-width: 1025px) {
        width: 30rem;

        left: calc(100% - 30rem);
        top: 7rem;

        border-radius: 8px 0 0 8px;

        @keyframes appear {
            0% {
                left: 100%;
            }
            100% {
                left: calc(100% - 30rem);
            }
        }
    }
`
