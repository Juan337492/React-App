import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card/>)
        .toJSON();
        expect(tree).toMatchSnapshot(); 
    });
});

