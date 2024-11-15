import React from 'react'
import './Crou.css'
import assuredImg from '../../Images/Assured.png'
function Crou() {
  var counter = 0;

  const img1 = `${0 * 100}%`;
  const img2 = `${1 * 100}%`;
  const img3 = `${2 * 100}%`;
  const img4 = `${3 * 100}%`;

  let img1trans = `${counter * 100}%`;
  let img2trans = `${counter * 100}%`;
  let img3trans = `${counter * 100}%`;
  let img4trans = `${counter * 100}%`;


      const slides = [
        {img:<img src='https://picsum.photos/id/236/1000/500' class='slide' id='imgst1' style={{left:img1}}/>,assuredUrl: assuredImg},
        {img:<img src='https://picsum.photos/id/237/1000/500' class='slide' id='imgst2' style={{left:img2}}/>,assuredUrl: assuredImg},
        {img:<img src='https://picsum.photos/id/238/1000/500' class='slide' id='imgst3'  style={{left:img3}}/>,assuredUrl: assuredImg},
{img:<img src='https://picsum.photos/id/239/1000/500' class='slide'   id='imgst4'  style={{left:img4}}/>,assuredUrl: assuredImg}
  ];

   const goNext = () =>{
       counter++;
       if (counter<4) {
         slideImage()
       }else{
        counter=3;
       }
   }
   
   const goPrev = () =>{
       counter--;
       if (counter>=0) {
         slideImage()
       }else{
        counter=0
       }
   }
    const slideImage = () =>{

        console.log(slides)
       slides.map((slide,index) =>{
        if (index == 0) {
          var el =document.getElementById('imgst1')
          el.style.transform = `translateX(-${counter * 100}%)`
        }else if (index == 1) {
          var el =document.getElementById('imgst2')
          el.style.transform = `translateX(-${counter * 100}%)`
          
        }else if (index == 2) {
          var el =document.getElementById('imgst3')
          el.style.transform = `translateX(-${counter * 100}%)`
          
        }else if (index == 3) {
          var el =document.getElementById('imgst4')
          el.style.transform = `translateX(-${counter * 100}%)`
          
        }
       })
    }
  return (
    <>
    <main>
{slides.map((d) => d.img)}
    
    </main>

<div class="nav">
    <button onClick={goPrev}>Prev</button>
    <button onClick={goNext}>Next</button>

</div>
</>
  )
}

export default Crou
