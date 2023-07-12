export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mini Fresh App</p>
      </div>
    </footer>
  );
}