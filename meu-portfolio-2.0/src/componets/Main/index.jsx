import { MainStyleds }  from "./MainStyled"
import {Card}  from "/src/componets/CardProjeto"

export const Main = () => {

    const projetos = [

        {
            id: 1,
            image: "/src/assets/imagens/projetos/kenzieHub.png",
            name:  "Kenzie Hub",
            stack: "React.. React-toastify.. React-router-dom Styled-Componet.. ",
            linkName: "",
            link: "https://entrega-s3-theta.vercel.app"
        },

   
        {
            id: 2,
            image: "/src/assets/imagens/projetos/NuKenzie.png",
            name:  "Nu Kenzie",
            stack: "React..  JS (Es6)..  Html..  Css..  React-toastify..  Styled-Componet..",
            linkName: "Linck Vercel",
            link: "https://entrega-nu-kenzie-tau.vercel.app/"
    
        },
    
        {
            id: 3,
            image: "/src/assets/imagens/projetos/BurguerKenzie.png",
            name:  "Burguer Kenzie",
            stack: "React..  JS (Es6)..  Html..  Css..  Styled-Componet..",
            linkName: "Linck Vercel",
            link: "https://projeto-hamburgueria.vercel.app/"
        },
    
        {
            id: 4,
            image: "/src/assets/imagens/projetos/kenzieEmpresas.png",
            name:  "Kenzie Empresas",
            stack: "JS (Es6).. Html 5.. Css 3..  ",
            linkName: "Indisponível no momento",
            link: "#"
        },
    
     
    
        {
            id: 5,
            image: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/11/29115707/mercado-da-construcao-civil-em-crescimento-1024x672-1.png",
            name:  "Em construção",
            stack: "",
            linkName: "",
            link: "#"
        },
        
    ] 



    return (
        
        <MainStyleds>
          <section id="inicio">
                <div>
                <span>Olá, eu sou</span>
                <h1>Joilson Hungria</h1>
                <span>Desenvolvedor Front-end</span>
                </div>
          </section>

          <section id="sobremim">

              <p>
                 Olá, meu nome é Joilson Hungria , tenho 30 anos, atualmente estou cursando desenvolvimento full-stack na Kenzie e trabalho na mesma como monitor de ensino ajudando os novos alunos, além disso trabalho como operador de empilhadeira onde supervisiono uma equipe de funcionários, tenho um grande sonho de me tornar um desenvolvedor web, e na kenzie estou confirmando isso, esta sendo muito gratificante aprender a progamar de forma rápida e eficiente.
              </p>
          </section>

          <section id="projetos">

            <ul>

              {projetos.map((e) => <Card img={e.image} name={e.name} stack={e.stack} link={e.link}/>)}
              
            </ul>

          </section>
        </MainStyleds>
    )

}