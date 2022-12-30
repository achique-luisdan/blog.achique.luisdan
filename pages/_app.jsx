import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import Image from 'next/image';

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
    <>
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
    </>
  );
}

export default function App({ Component, pageProps }) {

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
            <input type="text" placeholder="Buscar" className="search" />
          </div>
          <ThemeChanger />
        
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        <span>© 2023</span>
        <p>
          <span>
                    Hecho con mucho ❤️ en 🇻🇪 .
          </span>
        </p>
      </footer>
    </ThemeProvider>
  );
  
}
