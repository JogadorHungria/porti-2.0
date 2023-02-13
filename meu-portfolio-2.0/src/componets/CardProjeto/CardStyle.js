import styled from "styled-components";

export const CardStyles = styled.li`
   
    padding: 10px;
    border-radius: 5px;

    background-color: rgba(117, 11, 189, 1);
    
    width: 250px;
    height: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        height: 100%;
        width: 100%;
    }

    img{
        width: 100%;
        height: 50vh;
        border-radius: 4px;
    }

    h1{
        font-size: 24px;
    }

    h2{
        font-size: 16px;
        color: rgba(236, 250, 259, 0.9);
        font-weight: normal ;
        border-bottom: 1px solid;
        max-width: max-content;
        
    }

    span{
        font-size: 13px;
        color: rgba(236, 229, 229, 0.9);
    }

    a{
        color: white;
        background:rgba(146, 15, 235, 1);
        border: none;
        border-radius: 4px;
        padding: 5px;
        margin-top: 5px;
        text-align: center;
        
    }

    a:hover{
        background:rgba(175, 75, 243, 1);
    }


`