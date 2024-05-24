import React, { useState } from "react";
import styled from "styled-components";

const SectionStyled = styled.section<{selecionado: boolean}>`
width: 194px;
height: 88px;
border: 1px solid;
border-color: ${props => props.selecionado ? '#002F52': '#EB9B00'};
background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)': '#ffff'};
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
margin: 10px;
font-family: sans-serif;
cursor: pointer;
header{
    color: ${props => props.selecionado ? '#ffff': '#EB9B00'};
    font-size: 12px;
    font-weight: 400;
}
strong{
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.selecionado ? '#ffff': '#EB9B00'};
}
footer{
    font-size: 12px;
    font-weight: 400px;
    color: ${props => props.selecionado ? '#ffff': 'rgba(0, 0, 0, 0.54)'}
}
`
export interface AbGrupoOpcao{
    id:number
    titulo:string
    corpo:string
    rodape:string 
}
export interface AbGrupoOpcaoProps{
    opcoes:AbGrupoOpcao[]
    valorPadrao?:AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}
export const AbGrupoOpcoes = ({opcoes, onChange, valorPadrao}: AbGrupoOpcaoProps) => {
    const[selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null)
    const aoSelecionar = (opcao: AbGrupoOpcao): void => {
        setSelecao(opcao);
        if (onChange){
            onChange(opcao)
        }
        
    }

    return(<>
     {opcoes.map(opcao =>
         <SectionStyled onClick={() => aoSelecionar(opcao)} key={opcao.id} selecionado={selecao?.id == opcao.id}>
         <header>
           {opcao.titulo}
         </header>
         <div>
             <strong>{opcao.corpo}</strong>
         </div>
         <footer>
             {opcao.rodape}
         </footer>
     </SectionStyled>
        )}
    </>)
}