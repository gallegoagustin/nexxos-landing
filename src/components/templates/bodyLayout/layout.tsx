import PropTypes, { InferProps } from 'prop-types';
import NavBar from '../../elements/navBar/navBar.container';
import Footer from '@/components/elements/footer/footer';
import Head from 'next/head';
function Layout({ children, activeTab }: Props) {
  return (
    <div className={'w-full min-h-[100vh] col'}>
      <Head>
        <title>NEXXOS | El lado correcto de la educación</title>
        <meta
          name="description"
          content={
            'Somos una ONG que busca la transformación educativa en la Argentina y el mundo. Luchamos por una educación que tenga como eje principal la formación en habilidades, capacidades, inteligencias múltiples, autoconocimiento e interacciones sociales.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar activeTab={activeTab} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
  activeTab: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Layout.propTypes>;

export default Layout;
