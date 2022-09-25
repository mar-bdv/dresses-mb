import { useState } from 'react';
import './App.css';
import { data } from './data';
import { slides } from './slides';
import Top from './Top';


function App() {
  const [dresses, setDresess] = useState(data);
  const removeDress = (id) =>{
    let newDress = dresses.filter(dress => dress.id !== id);
    setDresess(newDress)
  } 
  const [person, setPerson] = useState(0);
  const { nameS, text, imageS} = slides[person];
  

  const previousBtn = () =>{
    setPerson((person => {
      person--;
      if(person < 0){
        return slides.length-1;
      }
      return person;
    }))
  }
  const nextBtn = () =>{
    setPerson((person => {
      person ++;
      if(person > slides.length-1){
        person = 0
      }
      return person;
    }))
  }

  return (
    <div>
      <Top/>
      <div className='head-container'>
        <h2>В вашей корзине {dresses.length} платьев</h2>
      </div>
      <div className='img-par'>
        {dresses.map((element => {
          const {id, dress, image} = element;
          return(
            <div key={id}>
              <div className='mini-div'>
                <img src={image} width="350px" alt='dress'/> 
                <h3>{id} - {dress}</h3>
                <button className='btn-imgPar' onClick={() => removeDress(id)}>Удалить</button>
              </div>
            </div>
            
          )
        }))}
      </div>
      <div className='center'>
        <button className='btn-imgPar' onClick={() => setDresess([])}>Удалить всё</button>
      </div>
      
      <div className='testimonials'>
        <h3>Отзывы</h3>
          <div className='person-div'>
            <img src={imageS} width="300px" alt='dress'/>
            <h2>{nameS}</h2>
            <p>{text}</p>
            <div className='buttons-testim'>
              <button className='btn-direction' onClick={previousBtn}>Назад</button>
              <button className='btn-direction' onClick={nextBtn}>Вперед</button>
            </div>
          </div>
      </div>

    </div>

    
  );
}

export default App;





/*<div>
    <div>
      <Top/>
        <div className='container-text'>
          <p>{}</p>
          <img alt='dress' className='image-top' src='https://images.unsplash.com/photo-1576208001697-acff6d2cfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'/>
        </div>
      </div>
    </div> 
description: 'Российский бренд одежды, обуви и аксессуаров. Собственные производственные площадки компании расположены в России, Белоруссии и Молдавии, розничная сеть насчитывает более 300 магазинов в четырех странах СНГ. Бренд занимает лидирующие позиции в сегменте online-продаж одежды.регулярно выпускает коллекции в сотрудничестве с Disney, MARVEL, Star Wars, Warner Bros., Turner, Coca-Cola, Universal, Fortniteэто качественная одежда, доступная для всех.  – это стильные вещи трендовых фасонов и разнообразных цветов.  – это вдохновение любимыми героями и яркий акцент в любом образе.  – это твой любимый магазин!'
    
    */
