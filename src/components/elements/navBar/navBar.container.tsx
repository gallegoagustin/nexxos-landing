import NavBar from './navBar';
import PropTypes, { InferProps } from 'prop-types';

function NavBarContainer({ activeTab }: Props) {
  const childProps = { activeTab };

  return <NavBar {...childProps} />;
}

NavBarContainer.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

type Props = InferProps<typeof NavBarContainer.propTypes>;

export default NavBarContainer;
