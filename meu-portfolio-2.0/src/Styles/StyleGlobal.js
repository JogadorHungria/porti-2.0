import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

body{
  
  font-family: 'Poppins', sans-serif;

  min-height: 100vh;
  background-image: url("/src/assets/imagens/pixel-jeff-clipa-s.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  color:  white;

}

:root {

  --color-1: #4200FF;
  --color-2: #CE4646;
  --color-3: #4BA036;

  --color-grey-1: #000000;
  --color-grey-2: #343A40;
  --color-grey-3: #495057;
  --color-grey-4: #868E96;
  --color-grey-5: #FFFFFF;
 

  --font-title-1: 40px;
  --font-title-2: 30px;
  --font-title-3: 25px;
  --font-title-4: 20px;

  --font-text-1: 18px;
  --font-text-2: 16px;
  --font-text-3: 14px;

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 500;
  --font-weight-4: 400;

  --radius-1: 4px;
  --radius-2: 8px;
  --radius-2: 12px;
  
  --size-1: 48px;
  --size-2: 32px;

  --gap-1: 60px;
  --gap-2: 45px;
  --gap-3: 30px;
  --gap-4: 20px;
  --gap-5: 10px;

  --container--1: 1200px ;
  --container--2: 800px ;
}

` 