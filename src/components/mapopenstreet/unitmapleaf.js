import { Map,Overlay } from "pigeon-maps"
import Link from 'next/link'



const Unitmapleaf = (props) => {
  
  return (
    
    //53.437389, -2.98517
    <Map height={300}
         width = {
           300}
defaultCenter={[props.lat,props.longs]}
defaultZoom={16}> 
    <Overlay anchor={[53.437389, -2.98517]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
 />
   </Link>
   
    </Overlay>
    </Map>
  )
}

export default Unitmapleaf;