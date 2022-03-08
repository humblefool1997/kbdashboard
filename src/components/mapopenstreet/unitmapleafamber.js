import { Map,Overlay } from "pigeon-maps"
import Link from 'next/link'



const Unitmapleafamber = (props) => {
  
  return (
    
  
    <Map height={300}
         width = {
           300}
defaultCenter={[props.lat,props.longs]}
defaultZoom={16}> 
    <Overlay anchor={[53.43753815, -2.9856801]} >
    <Link href="/screen1amber">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_amber.png'
width={20}
height={20}
 />
   </Link>
   
    </Overlay>
    </Map>
  )
}

export default Unitmapleafamber;