import PropTypes, { InferProps } from 'prop-types';
import NavBar from '../../elements/navBar/navBar.container';
import Footer from '@/components/elements/footer/footer';
function Layout({ children, activeTab }: Props) {
  return (
    <div className={'w-full min-h-[100vh] col'}>
      <NavBar activeTab={activeTab} />
      <div>{children}</div>
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
