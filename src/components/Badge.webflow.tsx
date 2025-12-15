import { Badge } from './Badge';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const BadgeWebflow = declareComponent(Badge, {
    name: 'Badge',
    description: 'A badge with variants',
    group: 'Info',
    props: {
        text: props.Text({
            name: "Text",
            defaultValue: "Hello World",
        }),
        variant: props.Variant({
            name: "Variant",
            options: ["Light", "Dark"],
            defaultValue: "Light",
        }),
    },
});

export default BadgeWebflow;