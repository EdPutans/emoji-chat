import React from 'react';
import './styles.scss';

type Props = {
  onChange:(e)=> any
  value: string
}

const Input: React.FC<Props> = ({ onChange, value }) => (
  <>
    <input className="Input" onChange={onChange} value={value} />
  </>
);

export default Input;
