import React from 'react'

const GifList = (props)=>{
    const gifLister = ()=>{
        return props.Gifs.map((gif, index)=>(<li key={index}><img src={gif} /></li>))
    }
    
    return (
    <ul>
        {gifLister()}
    </ul>)
}
export default GifList