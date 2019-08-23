import React, {
  useEffect,
  useReducer
} from 'react';
import { times } from 'lodash';

function googleAutoComplete(inputs) {
  inputs.forEach(input => {
    if (!input.hasAttribute('autocomplete')) {
      new window.google.maps.places.Autocomplete(input)
    }
  })
}

const initialState = {
  inputCount: 1
}

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_INPUT_COUNT':
      return { ...state, inputCount: state.inputCount + 1 }
    default:
      return state
  }
}

export default function SideBar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (window.google) {
      const inputs = document.getElementsByClassName('search-input');
      googleAutoComplete(Array.from(inputs))
    }
  }, [window.google, state.inputCount])

  return (
    <div id='sideBar'>
      <button onClick={ () => dispatch({ type: 'ADD_INPUT_COUNT' }) }>
        Add Another Location
      </button>
      
      <div className='divInputs'>
        { 
          times(state.inputCount, String).map(i =>
            <input className='search-input' key={`search-${i}`} type='text' />
          )
        }
      </div>

    </div>
  )
}
