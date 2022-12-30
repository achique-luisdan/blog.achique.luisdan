import Image from "next/image";
import { Tags } from "./Tags";

export function Sidebar ({tags}){
  return (
    <aside className="sidebar">
      <div>
        <Image src={'/photo.png'} width={150} height={150} alt={'Foto'} />
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ducimus nobis, repellat vero sunt dolore, molestiae praesentium quisquam laborum alias beatae facere. Maiores sit perferendis officiis, placeat laborum vel earum!.
      </p>
      <Tags tags={tags}></Tags>
    </aside>
  );
}