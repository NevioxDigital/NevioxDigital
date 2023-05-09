import { Footer } from '../footer/footer';
import {Navbar} from '../navbar/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    <main >{children}</main>
    <Footer/>
  </div>
  
);

export default Layout;
