import Image from "next/image";
import { Tags } from "./Tags";

export function Sidebar ({tags, quantityPosts}){
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
      ¡Hola! Soy Luis, desarrollador de software y fundador de la empresa TizanaSoft. Con 7 años de experiencia, mi pasión es crear soluciones tecnológicas. También soy escritor de un blog de tecnología en español. Abordo desde habilidades técnicas como SQL y Python hasta aspectos de bienestar personal y profesional, como planificación y auto-cuidado.
      </p>
      <Tags tags={tags} quantityPosts={quantityPosts}></Tags>
    </aside>
  );
}