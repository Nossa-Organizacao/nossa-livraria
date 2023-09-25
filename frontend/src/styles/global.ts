import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
body {
	font-family: 'Open Sans', sans-serif;
	min-height:100vh;
}

.error{
    color: red;
  }

:root {
	--color-branch-00:#FFE8D6;
	--color-branch-01:#DDBEA9;
	--color-branch-02:#CB997E;
	--color-sec-00:#B7B7A4;
	--color-sec-01:#A5A58D;
	--color-sec-02:#6B705C;
	--color-black:#0d1d10;
	--color-white:#f9feff;
	
	--color-brown-00:#bd8866;
	--color-brown-01:#72411B;
	--color-brown-02:#592F0F;
	--color-brown-03:#3D1A00;

	--color-green-01:#0A5E5B;
	--color-green-02:#004439;


	--color-grey-scale-0: #0b0d0d;
	--color-grey-scale-1: #212529;
	--color-grey-scale-2: #495057;
	--color-grey-scale-3: #868e96;
	--color-grey-scale-4: #adb5bd;
	--color-grey-scale-5: #ced4da;
	--color-grey-scale-6: #dee2e6;
	--color-grey-scale-7: #e9ecef;
	--color-grey-scale-8: #f1f3f5;
	--color-grey-scale-9: #f8f9fa;
	--color-grey-scale-10: #fdfdfd;
	/* --color-fixed-white-fixed: #ffffff; */

	--color-random-random-1: #e34d8c;
	--color-random-random-2: #c04277;
	--color-random-random-3: #7d2a4d;
	--color-random-random-4: #7000ff;
	--color-random-random-5: #6200e3;
	--color-random-random-6: #36007d;
	--color-random-random-7: #349974;
	--color-random-random-8: #2a7d5f;
	--color-random-random-9: #153d2e;
	--color-random-random-10: #6100ff;
	--color-random-random-11: #5700e3;
	--color-random-random-12: #30007d;

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

	--button-border: 3px;
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
