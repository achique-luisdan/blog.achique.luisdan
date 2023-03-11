import Image from "next/image";
import Link from "next/link";

export function Title ({content, isTag}){
  if (isTag){
    return (
      <section className="title-content">
        <div>
          <h1 className='title'> 
            { content.title }
          </h1>
          <span className='date'> 
            { content.date } 
          </span>
        </div>
      </section>
    );
  }
  else {
    return (
      <section className="title-content">
        <Image src={`/${content.tag}.svg`} alt="Icono del Tema" width={50} height={50} />
        <div>
          <h1 className='title'>
            { content.title }
          </h1>
          <span className='date'>
            { content.date +' ' }
            • { content.reading } minutos de lectura
            • <Link href={ `https://github.com/achique-luisdan/blog.achique.luisdan/blob/main/posts/${content.slug}.mdx`} target="_blank">¿Errores o sugerencias? Edita el artículo</Link>
          </span>
        </div>
      </section>
    );
  }
}