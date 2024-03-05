import React, { Children, useReducer, createContext } from 'react'


export const todoitem = createContext({
    task: [],
    addtodo: () => { },
    deletetodo: () => { }
});


export default function Todoitemcontextprovider({ children }) {


    const reducer = (state, action) => {
        let newarr = state;

        if (action.type === "Add") {
            const name = action.payload.name;
            const date = action.payload.date;
            newarr = [...state, { name, date }]
        }

        if (action.type === "Delete") {
            newarr = newarr.filter(e => e.name !== action.payload);
        }
        return newarr;

    }

    const [task, dispatch] = useReducer(reducer, []);

    const deletetodo = (name) => {
        dispatch({ type: "Delete", payload: name })
    }

    const addtodo = (name, date) => {
        dispatch({
            type: "Add",
            payload: {
                name, date
            }
        })
    }

    return (

        <todoitem.Provider value={{ task, addtodo, deletetodo }}>
            {children}
        </todoitem.Provider>

    )
}
