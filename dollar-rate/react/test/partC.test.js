import React from 'react';
import { shallow } from 'enzyme';
import PartC from '../src/components/partC';

describe('Test case for part c', () => {

    it('checks that the show button really show the table', () => {
        const component = shallow(<PartC />);
        const showButton = component.find("#show");
        const tableGraph = component.find("TableContainer");
        Simulate.click(showButton);
        expect(tableGraph.toBeInTheDocument())
    })
})
