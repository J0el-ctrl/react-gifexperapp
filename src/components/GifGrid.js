import React,{useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category}) => {
    //const [count, setCount] = useState(0);

        const [images, setImages] = useState([]);


    useEffect(()=>{
        getGifs(category)
        .then(setImages);
    },[category])

    return (
           <>
        <h1>{category}</h1>
        <div className="card-grid">
            
                {
                    images.map(img=>(
                        <GifGriditem 
                        key={img.id}
                        {...img}
                        />
                    ))  
                }
            
        </div>
           
           </>
    )
}
