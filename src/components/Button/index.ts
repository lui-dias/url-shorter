import styled from 'styled-components'

export const Button = styled.button`
    font-weight: 600;
    background: var(--primary);
    color: white;

    padding: 1rem 2rem;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;

    position: relative;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(90%);
    }
`
