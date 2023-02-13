import {CardStyles} from "./CardStyle"

export const Card = ({img , name , stack , link}) => {


    return(

        <CardStyles>
            <img src={img}  alt="Imagem" />
            <div>
               <h1>{name}</h1>
               {stack != "" ? <h2>Tecnologias utilizadas</h2> : <></> } 
               <span>{stack}</span>
               {link != "#" ? <a href={link} target="_blank">Link da página </a> : <a>Link Desativado</a>}
                
            </div>
        </CardStyles>
        

    )

}