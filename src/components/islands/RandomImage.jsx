import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function RandomImage({images, alt, width, height}) {

  const randomImg = () => images[(Math.floor(Math.random() * images.length))];
  
  const [image] = useState(randomImg());

  return (
    <img src={image} alt={alt} width={width} height={height} />
  );
}