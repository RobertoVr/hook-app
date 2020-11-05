import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        state: 10,
        increment: () => { }
    });

    test('Debe hacer render el componente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Citlaly',
                quote: 'Hermosa'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hermosa');
        expect(wrapper.find('footer').text().trim()).toBe('Citlaly');
    });

})
