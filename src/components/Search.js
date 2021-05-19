import React, { useState, useRef } from 'react';
import { ArrowForward } from '@material-ui/icons';
import '../css/App.css';

const Search = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const focusInput = useRef();

  const submitTerm = (e) => {
    e.preventDefault();

    if (term === '') return;

    onSubmit(term);
    setTerm('');
    focusInput.current.blur();
  };

  return (
    <React.Fragment>
      <form action='#'>
        <input
          type='text'
          className='text-input'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          ref={focusInput}
        />
        <button type='submit' className='submit' onClick={submitTerm}>
          <ArrowForward style={{ fontSize: '2.5rem' }} />
        </button>
      </form>
    </React.Fragment>
  );
};

export default Search;
