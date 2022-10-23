import styled from "styled-components";

const Buttons = styled.button`
/* Auto layout */
margin-top: 5%;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 46px;
gap: 24px;


/* Secundaria/100 */

background: #3AFC8A;
border-radius: 48px;
border: none;

/* Sub 1 */

font-family: 'Lexend';
font-style: normal;
font-weight: 400;
font-size: 1.5em;
line-height: 40px;
/* identical to box height */

align-items: center;
text-align: center;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

`;

export default Buttons;