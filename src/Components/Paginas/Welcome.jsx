import React,{useContext} from "react";
import '../Paginas/welcome.css'
import {Contexto} from '../context/Contexto'
const Welcome = () => {

  const {color} = useContext(Contexto)

  return (
    <div className="welcomeContainer" style={{backgroundColor: color}}>
      <h3>Bienvenidos al Contexto</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
        reprehenderit aut, officia, laborum earum repudiandae eaque suscipit
        officiis nihil debitis, autem explicabo perferendis? Autem, rem minus
        quos aspernatur recusandae quae? Assumenda in necessitatibus libero iste
        porro neque illum quibusdam eveniet. Vero maiores magnam, sequi ratione
        recusandae cum doloremque similique architecto porro provident iure
        harum odit quas distinctio accusantium doloribus delectus. Distinctio
        porro, maiores et architecto reiciendis quidem! Nisi iste ea, voluptatem
        architecto recusandae laborum. Quibusdam, nemo. Magnam omnis debitis
        inventore nam explicabo nostrum ratione, nemo voluptates tempora optio
        magni dolor. Cumque, perspiciatis alias. Expedita dolor sed recusandae,
        soluta corporis assumenda ipsum voluptatibus dolores similique accusamus
        perferendis officia neque cum pariatur. Error odit eligendi velit ipsum
        ea aliquid ad, natus ratione. Incidunt suscipit dolore facere. Ea iusto
        quod minima nostrum vero omnis, provident, deserunt recusandae alias
        voluptates quia reprehenderit! Dolore ipsum quis ratione fugit est
        autem? Aspernatur, est! Non, omnis consequuntur!
      </p>
    </div>
  );
};

export default Welcome;
