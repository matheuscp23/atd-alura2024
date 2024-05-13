import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbBotao, AbBotaoProps }from '../src'
export default{
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Ab botão Primário',
    tipo: 'primario'
}as AbBotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
    texto: 'Ab botão Secundario',
    tipo: 'secundario'
}as AbBotaoProps