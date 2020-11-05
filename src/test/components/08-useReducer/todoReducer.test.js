import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    test('Debe de retornar el estado por defeccto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    test('Debe agregar un TODO', () => {
        const payload = {
            id: 3,
            desc: 'Aprender vue',
            done: false
        }
        const state = todoReducer(demoTodos, {
            type: 'add',
            payload
        });
        expect(state).toEqual([...demoTodos, payload]);
        expect(state.length).toBe(3);
    });
    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });
    test('Debe de hacer el toggle del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);
        expect(state).not.toEqual(demoTodos);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });
});
