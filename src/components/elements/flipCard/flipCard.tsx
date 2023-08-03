import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Image from 'next/image';

function FlipCard({ name, age, position, info, image }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className={'row items-center w-5/6 justify-around mr-12'}>
            <Image
              src={image}
              alt={'image'}
              width={150}
              height={150}
              className={'rounded-full'}
            />
            <div className={'w-1/2 text-WHITE'}>
              <h1>{name}</h1>
              <p>{position}</p>
              <p>Edad: {age} años.</p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <p className={'text-WHITE text-justify p-6'}>{info}</p>
        </div>
      </div>
    </div>
  );
}

FlipCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  position: PropTypes.string,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

type Props = InferProps<typeof FlipCard.propTypes>;

export default FlipCard;
