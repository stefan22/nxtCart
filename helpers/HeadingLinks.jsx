import Head from "next/head";
import API_TEST_KEY from "./API";

const ThirdPartyLibraries = () => (
  <Head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script
      src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
      data-api-key={API_TEST_KEY}
      id="snipcart"
    ></script>

    <link
      href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
  </Head>
);

export default ThirdPartyLibraries;
