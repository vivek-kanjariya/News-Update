import React from 'react'
import './style/st.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Link2() {
  const[yo,setyo]=useState([])
 
const fetch =()=>{
  axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=0d6b67c8c6cd4e1f887c5b8f931fcde3').then((res)=>{
    console.log(res.data.articles)
    setyo(res.data.articles)
  })
}
useEffect(()=>{
  fetch()
},[])
  return (
    <>
    <div className="link2">
{ yo.map((i)=>{
return(
<div className="card">
  <img src={i.urlToImage} alt="" className='card-img' />
  <div className='card-title'>{i.title}</div>
  <p className='card-p'>{i.description}</p>
  <button className='card-btn'><a className='btn'>More Info</a></button>
</div>
)
})}
</div>
    </>
  )
}

export default Link2
