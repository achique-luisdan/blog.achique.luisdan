import Link from 'next/link';
import Image from 'next/image';

export default function CardAuthor({ post }) {
  if (post && post.authorName){
    return (
      <section>
        <div class="card-author">
          <Image class="circle-photo" src={post.authorPhoto}   alt="Foto del autor del artículo"  width={100} height={100}/>
          <div>
            <div class="card-header">
              <h4>{post.authorName}e</h4>
              <Link href={post.authorLink} target="_blank">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7LcF8_N6Z9jx9cx1IMWQgtDo-gmuhDcQSQ&usqp=CAU"   alt="Icono de enlace/link" width={40} height={40}/>
              </Link>
            </div>
            <span>{post.authorRole}</span>
            <p>{post.authorResume}</p>
          </div>
        </div>
      </section>
    ); 
  }
  else {
    return (
      <></>
    );
  }
}