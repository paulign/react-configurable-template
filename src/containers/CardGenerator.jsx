import React from 'react';
import FieldTemplate from './FieldTemplate';

const CardGenerator = ({template, house}) => {
    if (!template || !house) {
        return null;
    }

    return template.map((item, index) => {
        if (!item.children) {
            return <FieldTemplate {...item} key={index} value={house[item.field]} />
        } else {
            return (
                <FieldTemplate {...item} key={index} value={house[item.field]}>
                    {this.buildCard(item.children)}
                    <CardGenerator template={item.children} house={house} />
                </FieldTemplate>
            );
        }
    });
}

export default CardGenerator;