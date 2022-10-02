import React,{useContext} from "react";
import '../Paginas/footer.css'
import {Contexto} from '../context/Contexto'
const Footer = () => {

  const {color} = useContext(Contexto)

  return (
    <div className="footerContainer" style={{backgroundColor : color}}>
      <h6>Footer</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti,
        est facilis nisi dicta magni, alias libero aperiam aut, labore mollitia
        ea asperiores! Veritatis dolore dolorem, explicabo necessitatibus harum
        hic! Optio aliquam sequi sit est laboriosam laborum perferendis
        aspernatur pariatur recusandae inventore itaque iure id saepe iusto
        porro possimus doloremque delectus quisquam excepturi illum, ab
        laudantium molestias. Quis, voluptatibus ratione? Corporis dolorum optio
        ad nostrum rerum, aspernatur voluptates quidem amet explicabo libero ex.
        Numquam, doloremque? Amet necessitatibus doloribus eveniet rem sapiente
        non suscipit, inventore cupiditate voluptates tempora illo quisquam
        nobis! Impedit reiciendis, voluptate animi ipsa doloribus deleniti odit
        ipsum nostrum, ab eius, consequuntur totam. Culpa ipsam animi facere cum
        sunt explicabo inventore ullam nam, quis sapiente ad similique, quisquam
        quidem. Nisi, quaerat. Quo praesentium deleniti sunt suscipit vitae amet
        nemo officiis quas architecto facilis quidem veritatis pariatur eum
        eveniet ex molestiae ab debitis quam, natus repudiandae! Exercitationem
        voluptatum recusandae aliquid. Reprehenderit optio, sunt quas corporis
        voluptatem fugiat eligendi, facilis expedita possimus dolorem beatae
        deleniti ducimus. Earum libero maxime illum nisi, eos ut natus vitae
        optio, autem laborum quasi molestias consectetur! Commodi neque veniam
        vel corporis consectetur molestias ea ipsam fugit quam accusantium
        expedita molestiae reiciendis rerum consequatur nobis suscipit ipsa
        delectus officiis, adipisci possimus, unde dolorem minima fuga vitae?
        Recusandae? Vel, at placeat? Vitae soluta laboriosam praesentium fugiat
        facilis, illo nulla quasi, voluptatum, harum maxime cupiditate placeat
        quidem labore quod tenetur vel qui minus aliquid. Ut vel laborum neque
        perspiciatis.
      </p>
    </div>
  );
};

export default Footer;
