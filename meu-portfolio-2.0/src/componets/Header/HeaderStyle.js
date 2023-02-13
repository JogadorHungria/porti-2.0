import styled from "styled-components";

export const HeaderStyle = styled.header `

    display: flex;
    align-items: center;
    width: 100%;
    background-color: #343A40;
    color: white;
    border-bottom: solid 2px black;
    position: fixed;
    top: 0;
 
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100%;
        min-height: 50px;
        padding: 10px;

        max-width: var(--container--1);
        margin: 0 auto;
        

        h1{
            font-size: var(--font-title-3);
        }

        svg{
            color: white;
            font-size: 30px;
            opacity: 80%;
            display: none;
        }

        svg:hover{
            opacity: 100%;
           
        }

        nav{
            display: flex;
            gap: 20px;
            
            a{
                color: white;
                font-size: 18px;
                padding: 5px;
                border-bottom: 1px solid #343A40;
                width: max-content;
            }

            a:hover{
                
                border-bottom: 1px solid ;
                box-sizing: border-box;
            }

        }

        @media(max-width: 750px ) {
            
            svg{
                display: block;
            }

            nav{
                
                position: absolute;
                right: 0;
                flex-direction: column;
                top: 72px;
                background-color: #343A40;
                width: 100vw;
                padding: 30px 0;
                display: none;
               
            }
            .displayFlex{
                display: flex;
            }
        }
    }

`