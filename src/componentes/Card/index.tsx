import React, { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps{
    children: ReactNode
}
const Container = styled.div`
display: flex;
height: 266px;
width: 725px;
background-color: #FFFFFF;
color: black;
align-items: center;
text-align: center;
border-radius: 10px;
justify-content: space-between;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 24px;

`
export const Card = ({children}: CardProps) => {
    return(
        <Container>{children}</Container>
    )
}