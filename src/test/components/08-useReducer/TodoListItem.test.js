import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/todoList/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]}
        idx={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe llamar la función borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Number));
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });
    test('Debe llamar la función toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(expect.any(Number));
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    test('Debe de mostrar el texto correctamente <p></p>', () => {
        expect(wrapper.find('p').text()).toBe(`${1}. ${demoTodos[0].desc}`);
    });
    test('Debe de la clase complete si el todo.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem
            todo={todo}
            idx={0}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

})
