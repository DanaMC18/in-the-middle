import React, {
  useEffect,
  useReducer
} from 'react';
import { times } from 'lodash';

function googleAutoComplete(input) {
  return new window.google.maps.places.Autocomplete(input)
}

const initialState = {
  inputCount: 1
}

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_INPUT_COUNT':
      return { ...state, inputCount: state.inputCount++ }
    default:
      return state
  }
}


export default function SideBar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (window.google) {
      const inputs = document.getElementsByClassName('search-input');
      googleAutoComplete(inputs[0])
      dispatch({ type: 'ADD_INPUT_COUNT' })
    }
  }, [window.google])

  useEffect(() => {
    if (window.google) {
      const inputs = document.getElementsByClassName('search-input');
      debugger
      inputs.forEach(input => googleAutoComplete(input));
    }
  }, [state.inputCount])

  return (
    <div id='sideBar'>
      <button onClick={ () => dispatch({ type:'ADD_INPUT_COUNT'} ) }>
        Add Location
      </button>
      
      { 
        times(state.inputCount, String).map(i =>
          <input className='search-input' key='search-i' type='text' />
        )
      }

    </div>
  )
}
