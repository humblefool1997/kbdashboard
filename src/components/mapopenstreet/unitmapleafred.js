import { Map,Overlay } from "pigeon-maps"
import Link from 'next/link'



const Unitmapleafred = (props) => {
  
  return (
    
  <Map height={300}
width = {300}
defaultCenter={[props.lat,props.longs]}
defaultZoom={16}> 
   <Overlay anchor={[53.426521 , -3.066215]} >
  <Link href="/screen1red">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png'
width={20}
height={20}
/>
   </Link>
   </Overlay>
    </Map>
  )
}

export default Unitmapleafred;