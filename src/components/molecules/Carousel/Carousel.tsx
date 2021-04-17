import React, { useState, useRef, MutableRefObject } from 'react';
import classnames from 'classnames';
import { Button } from 'components/atoms';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import './Carousel.scss';
import { useEffect } from 'react';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
  viewportClass?: string;
  stepLength: number;
};

const Carousel: React.FC<CarouselProps> = ({ children, viewportClass, className, stepLength }) => {
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(true);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);
  const viewportRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (viewportRef.current) {
      const viewport: HTMLDivElement = viewportRef.current;
      const { scrollWidth } = viewport;

      const maxPositions = Math.floor(scrollWidth / stepLength);
      setMaxPosition(maxPositions);
    }
  }, []);

  useEffect(() => {
    if (viewportRef.current) {
      const viewport = viewportRef.current;
      const positionToPx = position * stepLength;

      setHasNext(positionToPx + viewport.offsetWidth > viewport.scrollWidth ? false : true);
      setHasPrev(positionToPx === 0 ? false : true);

      viewport.scrollLeft = positionToPx;
    }
  }, [maxPosition, position, stepLength]);

  const handleNext = () => {
    if (position < maxPosition) setPosition(position + 1);
  };

  const handleBack = () => {
    if (position > 0) setPosition(position - 1);
  };

  return (
    <div className={classnames('Carousel', className)}>
      <Button
        className={classnames('button', 'back', { hide: !hasPrev })}
        icon={<FaChevronLeft />}
        onClick={handleBack}
      />
      <div className={classnames('carousel-viewport', viewportClass)} ref={viewportRef}>
        {children}
      </div>
      <Button
        className={classnames('button', 'forward', { hide: !hasNext })}
        icon={<FaChevronRight />}
        onClick={handleNext}
      />
    </div>
  );
};

export default Carousel;
