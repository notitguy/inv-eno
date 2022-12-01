import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function RandomImage({images, className, alt, width, height}) {

  const randomImg = () => images[(Math.floor(Math.random() * images.length))];
  
  const [image] = useState(randomImg());

  return (
    <img src={image} class={className} alt={alt} width={width} height={height} />
  );
}