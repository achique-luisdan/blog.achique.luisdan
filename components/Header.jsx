import Link from "next/link";

export function Header (){
  return (
    <header>
      <nav>
        <Link href={'/'} className="branding">
          <image src="/logo.svg" alt="Logo" />
          <span className="name">
            <p>Achique</p>
            <p>Luis Daniel</p>
          </span>
          <span className="blog">
              BLOG
          </span>
        </Link>
        <div className="box-search">
          <image src="/lens.svg" alt="Icono de lupa." className="lens" />
          <input type="text" placeholder="Buscar" className="search" />
        </div>
        <div className="mode">
          <image src="/light.svg" alt="Selector de modo claro o oscuro." />
        </div>
        <a href="https://github.com/achique-luisdan/blog.achique.luisdan" className="github" target="blank">
          <span className="badge">
              7       
            <image src="/start_dark.svg" alt="Icono estrella." />
          </span>
          <image src="/github.svg" alt="Enlace al repositorio del blog en GitHub." />
        </a>
      </nav>
    </header>
      
  );
}