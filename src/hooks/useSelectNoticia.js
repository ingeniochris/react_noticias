import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const useSelectNoticia = (initialState, options) => {
const [state, setstatus] = useState(initialState)
const SelectNoticias = () => (
        <select
            className="browser-default"
            onChange={e => setstatus(e.target.value)}
            value={state}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))};
        </select>
    );
    return [
        state,
        SelectNoticias
    ]
}

useSelectNoticia.propTypes={
    initialState: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

