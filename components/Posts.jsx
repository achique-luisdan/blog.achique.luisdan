import Link from 'next/link';
import Image from 'next/image';

export default function Posts({ posts }) {
  return (
    <section>
      <ul className='posts'>
        {
          posts.map ((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`} className="to-post">
                <Image src={`/${post.tag}.svg`} alt="Icono del Tema" width={40} height={40} />
                <div>
                  <h3 className='title'>
                    { post.title }
                  </h3>
                  <span className='date'>
                    { post.date }
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}