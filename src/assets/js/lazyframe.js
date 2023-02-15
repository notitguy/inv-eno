import lazyframe from 'lazyframe';

let elements = document.querySelectorAll(".lazyframe");
  
lazyframe(elements, {
  autoplay: true,
  // Callbacks
  onLoad: (lazyframe) => console.log(lazyframe),
  onAppend: (iframe) => console.log(iframe),
  onThumbnailLoad: (img) => console.log(img),
});