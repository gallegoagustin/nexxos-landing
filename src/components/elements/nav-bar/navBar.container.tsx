import NavBar from './navBar';

interface Props {
  activeTab: string;
}

function NavBarContainer({ activeTab }: Props) {
  const childProps = { activeTab };

  return <NavBar {...childProps} />;
}

export default NavBarContainer;
