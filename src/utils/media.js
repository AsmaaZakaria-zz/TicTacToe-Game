import {css} from 'styled-components';

// handle responsiveness of mobile devices...
export const media = {
    handheld: (...args) => css`
        @media (max-width: 800px) {
            ${ css(...args) }
        }
    `
}
