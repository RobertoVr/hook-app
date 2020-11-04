import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Probando hook app', () => {
    test('Debe hacer render el hook app', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })

})
