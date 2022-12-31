import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { getAllFilesMetadata } from '../utils/reader-mdx';
import Footer from '../components/Footer';
import '../styles/globals.css';

const themes = [
  'light', 'dark'
];

function getIconsTheme (theme){
  const index = themes.findIndex(element => element === theme);
  let selected = null;
  let icons = null;
  if (index > -1){
    selected =  themes[index];
    const others = themes.filter ((element, i) => i !== index);
    icons = {
      selected,
      other: others[0] 
    };
  } else {
    icons = {
      selected: themes[0],
      other: themes[1]
    };
  }
  return icons;
}

export function ThemeChanger ()  {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mode">
      <button onClick={() => setTheme(getIconsTheme(theme).other)}>
        <div data-hide-on-theme="dark">
          <Image src="/light.svg" width={30} height={30}  alt="Selector de modo claro."/>
        </div>
        <div data-hide-on-theme="light">
          <Image src="/dark.svg" width={30} height={30} alt="Modo oscuro." />
        </div>
      </button>
    </div>
  );
}

export async function getStaticProps(){
  const titles = await getAllFilesMetadata();
  titles.map (element => {
    delete element.date;
    delete element.tag;
    delete element.description;
    delete element.reading; 
    return element; 
  });
  return {
    pageProps: { titles }
  };
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  function navigationTo  (slug)  {
    const index = pageProps.titles.findIndex (post=> post.slug === slug);
    setSearch (slug);
    if (index > -1){    
      router.push(`/${slug}`);
      setSearch ('');
    }
  }

  return (   
    <ThemeProvider enableSystem={true}>
      <header>
        <nav>
          <Link href={'/'} className="branding">
            <Image src="/logo.svg" alt="Logo"  width={60} height={60} />
            <span className="name">
              <p>Achique</p>
              <p>Luis Daniel</p>
            </span>
            <span className="blog">
            BLOG
            </span>
          </Link>
          <div className="box-search">
            <Image src="/lens.svg" alt="Icono de lupa." className="lens" width={10} height={18} />
            <input list="posts" placeholder="Buscar" className="search" onChange={(e) => { navigationTo(e.target.value); }} value={ search }/>
            <datalist id="posts">
              {
                pageProps.titles.map ((post) => (
                  <option value={post.slug} key={post.slug}>
                    {post.title}
                  </option>
                ))
              }
            </datalist>
          </div>
          <ThemeChanger />
          <Link href="https://github.com/achique-luisdan/blog.achique.luisdan" className="github" target="_blank">
            <span className="badge">
              7       
              <Image src="/start_dark.svg" alt="Icono estrella."  width={8} height={8} />
            </span>
            <div data-hide-on-theme="dark">
              <Image src="light_github.svg" alt="Enlace al repositorio del blog en GitHub."  width={30} height={30} />
            </div>
            <div data-hide-on-theme="light">
              <Image src="dark_github.svg" alt="Enlace al repositorio del blog en GitHub."  width={30} height={30} />
            </div>
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
