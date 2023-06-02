import PropTypes, { InferProps } from "prop-types";

function Layout({ children }: Props) {
  return (
    <div className={"w-full min-h-[100vh] col"}>
      <div>{children}</div>
      <h1>LAYOUT</h1>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

type Props = InferProps<typeof Layout.propTypes>;

export default Layout;
