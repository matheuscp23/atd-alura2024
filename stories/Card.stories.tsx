import React from "react";
import { ComponentMeta} from '@storybook/react'
import { Card } from '../src/componentes/Card'
export default{
    title: 'componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () =>{
    return(
        <Card>
            <h1>ola sou um card</h1>
        </Card>
    )
}