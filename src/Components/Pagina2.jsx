import React from 'react'

const Pagina2 = ({color,letra}) => {
  return (
    <div className="paginaContainer" style={{backgroundColor: color, color:letra}}>
    <h3>Pagina 2</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
      distinctio laborum exercitationem, natus officiis voluptatem minima
      aspernatur rerum fuga veritatis dolores, vitae deserunt impedit et
      excepturi odit sit velit consectetur.
    </p>
  </div>
  )
}

export default Pagina2