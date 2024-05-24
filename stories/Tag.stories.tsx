import React from "react";
import {Tag, TagProps} from "../src/componentes/Tag"
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    Title:'componentes/Tag',
    component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag{...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Tag'
}as TagProps
