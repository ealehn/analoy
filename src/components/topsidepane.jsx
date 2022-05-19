import '../internal_css/topsidepane.css'
import { useState} from 'react';

function TopSidePane(){
    const [text1,setText1] = useState('Talk is cheap')
    const [text2,setText2] = useState('Show me the code')
    const [pointx,setPointx] = useState(0)
    const [pointy,setPointy] = useState(0)

  const Hover = (e) =>{
   let pointerX = e.pageX;
   let pointerY = e.pageY;
   console.log(pointerX,pointerY)
   setPointx(pointerX)
   setPointy(pointerY)

  
    }
    
    return(
        <div onMouseMove={(e)=>Hover(e)} className="top-side-pane">
            <div className="text-container">
                <h1 className="text-1">{text1}</h1>
                <h1 className="text-2"> {text2}</h1>
                </div>
            <div className="custom-pointer" style={{transform: `translate3d(${pointx}px, ${pointy}px, 0)`}}></div>

        </div>
    );
}

export default TopSidePane;