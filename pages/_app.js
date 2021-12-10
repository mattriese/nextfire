import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
// main entry point for any page in the application
// wrapper or layout that surrounds every other page
// use to add navbar/footer, etc to every other page or to manage auth state on frontend

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
