import React from 'react'

export default function Videos({ title, heroi }) {
  return (
    <div className='container-videos'>
      <div className='body-videos'>
        <div className='row-titles'>
          <h2>Títulos</h2>
          {/* container */}
          <div className='items-wrapper'>
            <div className='items' id='scrollTitles'>
              {title.map((i) => {
                return (
                  <div className='itemTitle nv-item' key={i.mal_id}>
                    <img src={i.image_url} />
                    <p>{i.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='row-titles'>
          <h2>Videos</h2>
          {/* container */}
          <div className='items-wrapper'>
            <div className='items' id='scrollVideos'>
              {heroi.map((i) => {
                return (
                  <div className='itemVideos nv-item' key={i.id}>
                    <img src={i.image_url} />
                    <p>{i.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
