export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Mini Fresh App - powered by&nbsp;
        <a target="_blank" href="https://deno.land/" class="underline">deno</a>
      </div>
    </footer>
  );
}
