import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
		.fade-in-up {
        animation: fadeInUp 1000ms both;
    }

    .fade-in {
        animation: fadeIn 1000ms both;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0,100%,0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
		}
	`;

export default GlobalStyles;
