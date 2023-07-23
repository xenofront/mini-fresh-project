import Image from '../image.tsx';

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Mini Fresh App - This website is created by&nbsp;
        <a target="_blank" href="https://github.com/xenofront/">
          <Image path="/me-logo.svg" alt="logo" classes="mt-1 w-24 inline"/>
        </a>
        &nbsp;and powered by&nbsp;
        <a target="_blank" href="https://fresh.deno.dev/">
          <Image path="/logo.svg" alt="fresh logo" classes="mb-1 w-7 inline"/>
        </a>
      </div>
    </footer>
  );
}
