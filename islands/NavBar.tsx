import { useSignal } from '@preact/signals';


export default function NavBar() {
  const isOpen = useSignal(false);

  return (
    <>
      <div class="mx-auto flex justify-between items-center px-4 bg-gray-800 text-white py-4">

        <a href="/">
          <div class="cursor-pointer text-gray-300 hover:text-white px-3">
            <h1 class="text-2xl font-bold">Mini Fresh App</h1>
          </div>
        </a>

        <button
          class="md:hidden block px-3"
          onClick={() => isOpen.value = !isOpen.value}
        >
          {
            isOpen.value ?
              <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 20 20">
                <path d="M2 2L18 18M18 2L2 18" stroke="#FFF" stroke-width="2"/>
              </svg> :
              <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
          }
        </button>

        <nav class="hidden md:block">
          <div class="flex">
            <a href="/">
              <div class="px-3">
                <span class="text-gray-300 hover:text-white">Αρχική</span>
              </div>
            </a>
          </div>
        </nav>

      </div>
      {
        isOpen.value &&
        <div class="block md:hidden mx-auto absolute bg-gray-600 text-white h-screen w-full">
          <div class="m-3">
            <i class="fa fa-home mr-3"/>
            <a href="/">Αρχική</a>
          </div>
          <hr/>
        </div>
      }
    </>
  );
}
