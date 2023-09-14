import TopNav from "./TopNav";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";

const MainLayout = ({children}) => {
  return (
    <div className="main-layout">
      <header>
        <TopNav/>
        <Header/>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer/>
        <SubFooter/>
      </footer>
    </div>
  )
}

export default MainLayout