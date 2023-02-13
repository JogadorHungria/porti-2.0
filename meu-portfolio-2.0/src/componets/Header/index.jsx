import {HeaderStyle} from "./HeaderStyle"
import { HiMenu } from "react-icons/Hi";

export const Header = () => {

    const MobileNavBar = (e) => {

        console.log(e.target)

       document.querySelector("nav").classList.toggle("displayFlex")

    }

    
    return (
        
        <HeaderStyle>
            <div>
              
                <h1>Joilson Hungria</h1> 

                <HiMenu onClick={MobileNavBar}/>
               
                <nav>
                    <a onClick={MobileNavBar} href="#">Inicío</a>
                    <a onClick={MobileNavBar} href="#sobremim">Sobre mim</a>
                    <a onClick={MobileNavBar} href="#projetos">Projetos</a>
                    <a onClick={MobileNavBar} href="#">Habilidades</a>
                </nav>

            </div>
        </HeaderStyle>

    )

}