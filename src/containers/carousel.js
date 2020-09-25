import React from 'react'

export default function Carousel({ textInput, animes, herois }) {
  return (
    <div className='container-carousel'>
      <div className='body-carousel'>
        {textInput.length === 0 ?
          <h1>Comece a digitar para visualizar sua busca!</h1>
          :
          <>
            <div className='row'>
              <h2>Animes</h2>
              <div className='items-wrapper'>
                <div className='items' id='scrollAnime'>
                  {animes.length === 0 ?
                    <div className='notAnime'>
                      <h3>Nenhum anime encontrado</h3>
                    </div>
                    :
                    animes.map((i) => {
                      return (
                        <div className='item-anime nv-item' key={i.id}>
                          <img src={i.image_url} />
                          <p>{i.title}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='row'>
              <h2>Heróis</h2>
              <div className='items-wrapper'>
                <div className='items' id='scrollHeroi'>
                  {herois.length === 0 ?
                    <div className='notHeroi'>
                      <h3>Nenhum herói encontrado</h3>
                    </div>
                    :
                    herois.map((i) => {
                      return (
                        <div className='item-heroi nv-item' key={i.id}>
                          <img src={i.image_url} />
                          <p>{i.title}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}
