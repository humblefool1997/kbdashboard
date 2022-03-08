import Image from 'next/image'
import compImage from '../product/image.png';

export const ImageLoader = (props) => {
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
    <Image
      src={compImage}
      alt="Compressor Location"
      
    />
     </div>
     </>
  )};