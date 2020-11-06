import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/form/TodoAdd';

describe('Pruebas en TodoAdd', () => {

    const handleAddToDo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddToDo={handleAddToDo}
        />
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('No debe de llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddToDo).toHaveBeenCalledTimes(0);

    });
    test('Debe de llamar la funcion handleAddTodo', () => {
        const value = 'aprender JS';

        wrapper.find('input').simulate('change', {
            target: {
                name: 'description',
                value
            }
        });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(handleAddToDo).toHaveBeenCalledTimes(1);
        expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddToDo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
