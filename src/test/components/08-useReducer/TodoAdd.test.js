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
    )

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('No debe de llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddToDo).toHaveBeenCalledTimes(0);

    });


})
