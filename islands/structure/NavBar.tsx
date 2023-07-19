import { useSignal } from '@preact/signals';

export default function NavBar() {
  const isOpen = useSignal(false);

  return (
    <>
      <div class="flex justify-between items-center px-4 bg-gray-800 text-white py-4">
        <a href="/">
          <span class="cursor-pointer text-gray-300 hover:text-white px-3 text-base md:text-2xl font-bold">
            Mini Fresh App
          </span>
        </a>

        <button
          class="md:hidden block px-3"
          onClick={() => isOpen.value = !isOpen.value}
        >
          {isOpen.value
            ? (
              <svg
                class="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M2 2L18 18M18 2L2 18" stroke="#FFF" stroke-width="2"/>
              </svg>
            )
            : (
              <svg
                class="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            )}
        </button>

        <nav class="hidden md:block">
          <div class="flex">
            <a href="/">
              <span class="px-3 text-gray-300 hover:text-white">Αρχική</span>
            </a>
          </div>
        </nav>
      </div>
      {isOpen.value &&
        (
          <div class="bg-gray-600 text-white animate-slide-down">
            <div class="m-3">
              <i class="fa fa-home mr-3"/>
              <a href="/">Αρχική</a>
            </div>
            <hr class="border-gray-500"/>
          </div>
        )}
    </>
  );
}
