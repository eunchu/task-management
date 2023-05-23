import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
