import styled from "styled-components";

export const MainStyleds = styled.main`
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    #inicio{

    
        min-height: 80vh;

        display: flex;
        flex-direction: column;
        justify-content: center;

        div{

            display: flex ;
            flex-direction: column;
            align-items: baseline;
            gap: 20px;

            span{
                font-size: 55px;
                color: rgba(194, 188, 188, 1);
            }

            h1{
                font-size: 80px;
            }

        }

    }

    #sobremim{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-sizing: border-box;

        height: 90vh;
        max-width: 70%;
        font-size: 30px;
     
        line-height: 150%;
        

    }

    #projetos{

        padding: 100px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      
        ul{
        
            display: flex;
            justify-content: center;
            max-width: 95%;
            flex-wrap: wrap;
            gap: 30px;
         
        }
        
    }

    @media (max-width: 800px) {
        #inicio{
            


            div{

                display: flex ;
                flex-direction: column;
                align-items: baseline;
                gap: 20px;

                span{
                    font-size: 30px;
                    color: rgba(194, 188, 188, 1);
                }

                h1{
                    font-size: 50px;
                }

                }

        }

        #sobremim{
        
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;

            height: 80vh;
            max-width: 90%;
            font-size: 25px;
        
            line-height: 150%;
                

        }


    }


    @media (max-width: 400px) {

        #inicio{
            


            div{
                gap: 20px;

                span{
                    font-size: 19px;
                    color: rgba(194, 188, 188, 1);
                }

                h1{
                    font-size: 30px;
                }

                }

        }

        #sobremim{

            height: 100vh;
            max-width: 90%;
            font-size: 18px;
        
            line-height: 150%;
            

        }


    }

`