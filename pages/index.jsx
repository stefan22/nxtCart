import Header from "../components/header/";
import Footer from "../components/footer/";
import Contact from "../components/contact/";
// helpers
import ProductList from "../helpers/ProductList";
import ThirdPartyLibraries from "../helpers/HeadingLinks";
// styles
import "../styles/styles.scss";

const Index = (props) => {
  return (
    <div className="app">
      <ThirdPartyLibraries />
      <Header />
      <main className="main">
        <div className="promotional-message">
          <h3>Limited Edition</h3>
          <h2>South Park Figures</h2>
          <p>
            <strong>Exclusive collection</strong>, now available to the public.{" "}
            <strong>Only one doll per household please</strong>.
          </p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    products: [
      {
        id: "zombie_kenny",
        name: "Zombie Kenny",
        price: 33.0,
        image: "../static/zombiekenny.jpg",
        description: `Diam nulla interdum tortor consequat augue primis, congue varius faucibus eget vestibulum dignissim, lectus ad praesent cubilia dapibus. Cum inceptos sapien senectus at nunc viverra pretium bibendum aliquet est, neque nulla sodales curabitur tincidunt eu primis nam lacus lectus, id velit cursus vitae luctus sagittis commodo habitasse diam.`,
      },

      {
        id: "cartman_cop",
        name: "Cartman Cop",
        price: 35.0,
        image: "../static/cartmancop.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipiscing elit habitant dapibus taciti tincidunt, nunc praesent torquent eros risus mus mollis sociosqu parturient faucibus luctus, vehicula justo rhoncus magna interdum nam vivamus eu primis leo. Diam nulla interdum tortor consequat augue primis, congue varius faucibus eget vestibulum dignissim, lectus ad praesent cubilia dapibus. `,
      },

      {
        id: "ike_broflovski",
        name: "Ike Broflovski",
        price: 27.5,
        image: "../static/ikebroflovski.jpg",
        description: `Vel tortor curabitur vestibulum pulvinar proin inceptos mus turpis, gravida eros nulla netus vivamus morbi felis phasellus, vehicula luctus nec potenti montes pretium imperdiet. Netus dictumst morbi tempor fusce vitae enim torquent, nam ornare aliquet vehicula mus mattis class, nostra per magna mollis neque curabitur.`,
      },

      {
        id: "mr_garrison",
        name: "Mr Garrison",
        price: 15.0,
        image: "../static/mrgarrison1.jpg",
        description: `Netus dictumst morbi tempor fusce vitae enim torquent, nam ornare aliquet vehicula mus mattis class, nostra per magna mollis neque curabitur. Pellentesque litora pharetra sem condimentum justo primis ligula facilisi dapibus venenatis rutrum nullam, dictum ornare quam nulla aptent non sociis nec imperdiet hendrerit.`,
      },

      {
        id: "chef",
        name: "Chef",
        price: 15.0,
        image: "../static/cheftoy.jpg",
        description: `Diam nulla interdum tortor consequat augue primis, congue varius faucibus eget vestibulum dignissim, lectus ad praesent cubilia dapibus. Cum inceptos sapien senectus at nunc viverra pretium bibendum aliquet est, neque nulla sodales curabitur tincidunt eu primis nam lacus lectus, id velit cursus vitae luctus sagittis commodo habitasse diam.`,
      },

      {
        id: "butters",
        name: "Butters",
        price: 32.5,
        image: "../static/butters.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipiscing elit habitant dapibus taciti tincidunt, nunc praesent torquent eros risus mus mollis sociosqu parturient faucibus luctus, vehicula justo rhoncus magna interdum nam vivamus eu primis leo. Aenean eget praesent ac sociis aptent cras tortor facilisis, interdum est rutrum nunc egestas orci accumsan, inceptos hendrerit elementum tempus penatibus ligula etiam.`,
      },

      {
        id: "terrance",
        name: "Terrance",
        price: 25.0,
        image: "../static/terrance.jpg",
        description: `Netus dictumst morbi tempor fusce vitae enim torquent, nam ornare aliquet vehicula mus mattis class, nostra per magna mollis neque curabitur. Pellentesque litora pharetra sem condimentum justo primis ligula facilisi dapibus venenatis rutrum nullam, dictum ornare quam nulla aptent non sociis nec imperdiet hendrerit.`,
      },

      {
        id: "phillip",
        name: "Phillip",
        price: 25.0,
        image: "../static/phillip.jpeg",
        description: `Suscipit praesent egestas arcu integer nisl, hendrerit nostra fames ultrices lobortis, class dignissim euismod vel. Cursus nisl pellentesque vitae lacus natoque varius habitasse curabitur mi, morbi etiam enim semper conubia eros sed congue venenatis torquent, porttitor gravida parturient tempus platea hac tempor velit.Pellentesque litora pharetra sem condimentum justo primis ligula facilisi dapibus venenatis rutrum nullam, dictum ornare quam nulla aptent non sociis nec imperdiet hendrerit.`,
      },

      {
        id: "professor_chaos",
        name: "Professor Chaos",
        price: 35.0,
        image: "../static/butterschaos.png",
        description: `At posuere inceptos platea magna porttitor iaculis, hac class blandit senectus lobortis maecenas vulputate, parturient magnis quis nostra diam. Luctus leo rhoncus taciti sed urna elementum gravida aliquet turpis mauris tristique, sodales sapien dis suscipit eros est primis eu accumsan hendrerit. Pellentesque vestibulum augue morbi torquent pretium praesent, condimentum curae arcu erat per sem, mattis ad potenti penatibus aenean. `,
      },
    ],
  };
};

export default Index;
