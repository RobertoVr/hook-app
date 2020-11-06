import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { ToDoApp } from '../../../components/08-useReducer/ToDoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <ToDoApp></ToDoApp>', () => {

    const wrapper = shallow(<ToDoApp />);
    Storage.prototype.setItem = jest.fn(() => { });

    test('Debe de mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    // test('Debe de agregar un TODO', () => {
    //     const wrapper = mount(<ToDoApp />);
    //     act(() => {
    //         wrapper.find('TodoAdd').prop('handleAddToDo')(demoTodos[0]);
    //         wrapper.find('TodoAdd').prop('handleAddToDo')(demoTodos[1]);
    //     });
    //     expect(wrapper.find('h1').text().trim()).toBe('To Do App (2)');
    //     expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    // });
    test('debe eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddToDo')(demoTodos[0]);
        expect(wrapper.find('h1').text().trim()).toBe('To Do App (1)');
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('To Do App (0)');
    })
    
});
