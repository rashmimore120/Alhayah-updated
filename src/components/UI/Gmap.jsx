import React, { useEffect } from 'react'

// const Gmap = () => {
//   return (
//     <div>Gmap
    
//     <div class="mapouter"><div class="gmap_canvas"><iframe style={{width: "100%", height: "600px" }} id="gmap_canvas" 
//     src="https://maps.google.com/maps?q=Alqasidat,%20Behind%20Khuzam%20Street,%20Ras%20Al%20Khaima,%20United%20Arab%20Emirates&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> 
//     </iframe></div>
//     </div>
//     </div>
//   );
// }

const Gmap = () => {
  useEffect(()=>{
    const ifameData=document.getElementById('iframeId')
    const lat=25.767549;
    const lon=55.962478;
    ifameData.src= `https://maps.google.com/maps?q=${lat},${lon}&h1=es;&output=embed`
  })
  return(
    <div>
      <iframe id='iframeId' height='500px' width='100%'></iframe>
    </div>
    );
  }




export default Gmap

