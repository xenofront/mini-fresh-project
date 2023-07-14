import { IChildren } from '../../shared/interfaces.ts';
import Footer from './Footer.tsx';
import Head from './Head.tsx';
import Header from './Header.tsx';

export default function Layout({children}: IChildren) {
  return (
    <>
      <Head/>
      <div class="flex flex-col min-h-screen">
        <Header/>
        <main class="flex-grow p-4 mx-auto max-w-screen-md">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}
