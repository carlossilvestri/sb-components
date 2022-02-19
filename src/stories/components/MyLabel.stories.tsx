import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/my-label/MyLabel";

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        // color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />
// ***** Basic
export const Basic = Template.bind({});
// Default values
Basic.args = {
    size: 'normal',
    label: 'No Label',
    AllCaps: false
}
// ***** AllCaps
export const AllCaps = Template.bind({});
// Default values
AllCaps.args = {
    size: 'normal',
    AllCaps: true // Capitalizar toda la palabra
}
// ***** Primary
export const Primary = Template.bind({});
// Default values
Primary.args = {
    size: 'normal',
    color: 'primary'
}
// ***** Secondary
export const Secondary = Template.bind({});
// Default values
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}
// ***** Tertiary
export const Tertiary = Template.bind({});
// Default values
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}
// ***** CustomFontColor
export const CustomFontColor = Template.bind({});
// Default values
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}