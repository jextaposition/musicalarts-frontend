import layclass from "./Layout.module.css";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={layclass.main}>{props.children}</main>
      {/*<Footer />*/}
    </div>
  );
}

export default Layout;
