import React, { forwardRef } from 'react';
import { Delete } from '@material-ui/icons';
import '../css/App.css';

const RenderItem = forwardRef(({ term, elementKey, onDelete }, ref) => {
  const deleteItem = (key) => {
    console.log(`deleting an item with key = ${key}`);
    onDelete(key);
  };

  return (
    <div className='single-item' ref={ref}>
      <h2 className='item-name'>{term}</h2>
      <div className='icon-delete-element'>
        <Delete
          style={{ color: 'red', height: '2.5rem', width: '2.5rem' }}
          onClick={() => deleteItem(elementKey)}
        />
      </div>
    </div>
  );
});

export default RenderItem;
