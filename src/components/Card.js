import { useEffect, useState } from 'react';

const Card = props => {
  const [name, setName] = useState(props.value.name);

  useEffect(() => {
    setName(props.value.name);
  }, [props.value]);

  return (
    <div className='card' onClick={() => props.cardClicked(name)}>
      <img src={`./images/${name === 'Void Fiend' ? 'Void_Fiend' : name}.webp`} alt={`${name}`}/>
      <p>{name}</p>
    </div>
  );
}

export default Card;
