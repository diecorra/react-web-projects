import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const List = (props) => {
  return (
    <ul className='user-list'>
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} removeItem={props.removeItem} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, name, state, img, removeItem }) => {
  return (
    <article>
      <img src={img} alt='person-img' className='person-img' />
      <div className='person-info'>
        <div className='person-action'>
          <h4>{name}</h4>
          <button className='btn' onClick={() => removeItem(id)}>
            <AiFillDelete className='icon' />
          </button>
        </div>
        <p>{state}</p>
      </div>
    </article>
  );
};

export default List;
