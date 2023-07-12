import { Head } from '$fresh/runtime.ts';

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css"/>
        <title>Mini Fresh App</title>
      </Head>
      <header class="bg-gray-800 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
          <a href="/">
            <div class="cursor-pointer text-gray-300 hover:text-white">
              <h1 class="text-2xl font-bold">Mini Fresh App</h1>
            </div>
          </a>
          <nav>
            <div class="flex">
              <a href="/">
                <div class="p-3">
                  <span class="text-gray-300 hover:text-white">Home</span>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
