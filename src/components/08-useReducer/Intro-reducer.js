
const initilState = [{
    id: 1,
    todo: 'Comer pan',
    done: false
}];

export const ToDoReducer = (state = initilState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

const toDo = ToDoReducer();

const newToDo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newToDo
}

const res = ToDoReducer(toDo, action);


console.log(res);