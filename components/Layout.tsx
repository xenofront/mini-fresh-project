import Footer from './Footer.tsx';
import Header from './Header.tsx';

export default function Layout({children}) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header/>
      <main class="flex-grow">
        <div class="p-4 mx-auto max-w-screen-md">
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
