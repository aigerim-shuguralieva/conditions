import React from 'react'
import './Card.css'
export const Card = ({data}) => {
    // return <div style={{backgroundColor: data.color}} className="card">
    //     {data.title}
    // </div>

    //1-case

    // if (data.color) {
    //     return <div style={{backgroundColor: data.color}} className="card">
    //         {data.title}
    //     </div>
    // }else{
    //      return <div style={{backgroundImage: `url(${data.img})`}} className="card">
    //          {data.title}
    //  </div>
    // }

    //2-case

    // switch (data.color) {
    //    case null:
    //         return <div style={{backgroundImage: `url(${data.img})`}} className="card">
    //          {data.title}
    //  </div>

    //  default:
    //     return <div style={{backgroundColor: data.color}} className="card">
    //         {data.title}
    //     </div>
    // }

    

    // return <>
        
    //    { 
    //      data.color
    //    ?<div style={{backgroundColor: data.color}} className="card">
    //         {data.title}
    //     </div>
    //     : <div style={{backgroundImage: `url(${data.img})`}} className="card">
    //          {data.title}
    //  </div>}
    // </>

    return <>
        
       { 
         data.color && <div style={{backgroundColor: data.color}} className="card">
            {data.title}
        </div>
        }
      {  data.color === null && <div style={{backgroundImage: `url(${data.img})`}} className="card">
             {data.title}
     </div>}
    </>
}