import Image from "next/image";
import { Tags } from "./Tags";

export function Sidebar ({tags}){
  return (
    <aside className="sidebar">
      <div>
        <div className="circle">
        🍊
        </div>
        <Image src={'/photo.png'} width={150} height={150} alt={'Foto'} priority="true" />
      </div>
      <h2>
        <p>
          Achique
        </p>
        <p>
          Luis Daniel
        </p>
      </h2>
      <h3 className="rol">
        Software Developer
      </h3>
      <p className="description">
        Joven soñador, apasionado del desarrollo de soluciones de software, con 7 años de experiencia, consultor y creador de contenidos educativos abiertos.
      </p>
      <Tags tags={tags}></Tags>
    </aside>
  );
}