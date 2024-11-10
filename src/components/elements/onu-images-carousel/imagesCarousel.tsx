import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  onClose: Function;
}

const OnuImageCarousel = ({ onClose }: Props) => {
  const { i18nCommon } = useDynamicTranslation();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const list = new Array(28).fill(null);

      const urls = list.map((_, index) => {
        return `${process.env.NEXT_PUBLIC_ONU2024_GALLERY_URL}${index + 1}.JPG`;
      });

      setImages(urls);
    };

    loadImages();
  }, []);

  const renderArrowPrev = (
    clickHandler: MouseEventHandler,
    hasPrev: boolean,
    label: string,
  ) => {
    return (
      <button
        type="button"
        onClick={clickHandler}
        title={label}
        style={{
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '0',
          padding: '0',
          margin: '0',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        <div className="arrow-container-prev" />
      </button>
    );
  };

  const renderArrowNext = (
    clickHandler: MouseEventHandler,
    hasPrev: boolean,
    label: string,
  ) => {
    return (
      <button
        type="button"
        onClick={clickHandler}
        title={label}
        style={{
          display: 'block',
          position: 'absolute',
          top: '50%',
          right: '0',
          padding: '0',
          margin: '0',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        <div className="arrow-container-next" />
      </button>
    );
  };

  return (
    <div
      className={
        'full fixed top-0 right-0 row centered z-[1000] overflow-y-scroll opacity-[100]'
      }
      style={{
        background: 'rgba(47, 47, 77, 0.65)',
        backdropFilter: 'blur(3px)',
      }}
    >
      <button
        className="absolute top-2 right-2 m-2 bg-GREY_LIGHT rounded-sm py-1 px-4 shadow-md"
        onClick={() => onClose()}
      >
        {i18nCommon('close')}
      </button>
      {images.length > 0 ? (
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          className="w-[400px] md:w-[600px] max-h-[90vh] col centered"
          dynamicHeight
          useKeyboardArrows
          showIndicators={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[400px] md:w-[600px] h-[90vh] col centered"
              style={{
                background: `url(${image}) no-repeat center center`,
                backgroundSize: 'contain',
              }}
            />
          ))}
        </Carousel>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default OnuImageCarousel;
