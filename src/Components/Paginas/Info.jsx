import React,{useContext} from "react";
import '../Paginas/info.css'
import {Contexto} from '../context/Contexto'

const Info = () => {

  const {color} = useContext(Contexto)

  return (
    <div className="infoContainer" style={{backgroundColor : color}}>
      <h5>Info</h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        omnis optio doloribus unde impedit fugit accusantium maxime quod
        voluptatem consequatur et id ratione, accusamus distinctio aliquid!
        Eius, praesentium? Quia, consectetur. Modi, dolorum veritatis! Nemo
        perspiciatis corrupti quidem vel fuga repellendus facilis ut, explicabo
        neque soluta accusantium veritatis saepe deserunt dolorem quaerat
        consectetur totam aperiam sed reiciendis deleniti eaque quis aut!
        Officia assumenda nemo saepe vitae debitis, excepturi ratione aliquid,
        harum mollitia vel quam quasi, accusantium neque dolores distinctio
        magnam. Quaerat fugit dolorum eos magnam eius dicta dolore laudantium
        veniam corrupti. Obcaecati dicta tempore laudantium, vitae aperiam ipsa
        officiis voluptatibus labore excepturi minima tempora omnis amet, dolor
        ea. Iste exercitationem praesentium quam molestiae? Praesentium
        molestias voluptatem, pariatur rem atque asperiores. Molestias. Dolorem
        nesciunt ipsam ea, sit alias perspiciatis ad dignissimos nostrum
        excepturi reprehenderit magnam natus explicabo velit ut quo voluptatum
        quasi id praesentium consequatur. Saepe facere ipsum suscipit porro ex
        doloribus? Corporis modi dicta iste quod nesciunt doloremque neque nobis
        blanditiis eum perspiciatis maiores, enim ducimus deserunt eaque!
        Deserunt minus inventore rerum aperiam? Autem blanditiis dicta impedit
        necessitatibus ea unde libero? Vero qui assumenda nobis sint ex beatae
        esse eligendi error quae soluta eius fugit quas inventore accusamus,
        neque omnis dolorem deserunt exercitationem possimus laborum porro
        cumque? Velit natus alias ducimus!
      </p>
    </div>
  );
};

export default Info;
