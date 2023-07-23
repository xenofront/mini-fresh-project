import { Logo } from '../me-logo.tsx';

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Mini Fresh App - This website is created by&nbsp;
        <a target="_blank" href="https://github.com/xenofront/">
          <Logo isInline={true} classes="mt-1"/>
        </a>
        &nbsp;and powered by&nbsp;
        <a target="_blank" href="https://deno.land/" class="underline">deno</a>
      </div>
    </footer>
  );
}
