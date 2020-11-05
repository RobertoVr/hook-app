import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en RealExampleRef', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    test('debe mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
