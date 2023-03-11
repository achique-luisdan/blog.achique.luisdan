import Image from "next/image";
import Link from 'next/link';

export function Tags ({ tags }){
  return (
    <section>
      <h2>Contenidos</h2>
      <ul>
        <li className="to-tag">
          <h4 className='title'>
            Temas
          </h4>
          <h4 className='qty'>
            Artículos
          </h4>
        </li>
        {
          tags.map ((tag) => (
            <li key={tag.slug}>
              <Link href={`/${tag.slug}`} className="to-tag">
                <Image src={`/${tag.slug}.svg`} alt="Icono del Tema" width={25} height={25} />
                <h4 className='title'>
                  { tag.name }
                </h4>
                <h4 className='qty'>
                  { tag.qty }
                </h4>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}