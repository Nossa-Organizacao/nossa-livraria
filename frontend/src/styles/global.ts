import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
body {
	font-family: 'Open Sans', sans-serif;
	min-height: 100vh !important;
}

:root {
	--color-branch-00:#2f363c;
	--color-branch-01:#2b3034;
	--color-branch-02:#bd8866;
	--color-gray-00:#2e3336;
	--color-green-05:#143019;
	--color-black:#0d1d10;
	--color-white:#f9feff;

	--modal-background: rgba(33, 37, 41, 0.6);

	--font-heading-1: 2.75rem; 
	--font-heading-2: 2.25rem; 
	--font-heading-3: 2rem; 
	--font-heading-4: 1.75rem; 
	--font-heading-5: 1.5rem; 
	--font-heading-6: 1.25rem; 
	--font-body-1: 1rem; 
	--font-body-2: .875rem; 

	--font-bold: 700;
	--font-semibold: 600;
	--font-medium: 500;
	--font-base: 400;

	--button-border: 2px;
	--input-border: 4px;

	--button-width-0: 5rem; 
	--button-width-1: 6.25rem; 
	--button-width-2: 6.75rem; 
	--button-width-3: 7.875rem; 
	--button-width-4: 9.375rem; 
	--button-width-5: 10.313rem;  
	--button-width-6: 12.875rem; 
	--button-width-7: 17.438rem; 
	--button-width-100: 100%;
	--button-width-48: 48%;
	--button-width-80: 80%;

	--button-height-1: 3rem; // 48px

	--border-button-1: 1.5px solid var(--grey-1);
 }
`;
