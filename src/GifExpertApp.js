import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories=['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd=()=>{
     //   setCategories(['los vengadoress',...categories]);
    //}

    return (
        <>
            
            <h2>GifExpertApp©Joelbarrera</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            

            <ol> 
            {
            categories.map(category=>
             <GifGrid 
             key={category}
             category={category} />
            )
            }

            </ol>
        </>
    )
}
