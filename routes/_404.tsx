import Layout from '../components/Layout.tsx';

export default function NotFoundPage() {
  return (
    <Layout>
      <div class="flex flex-col justify-center items-center">
        <div class="text-6xl font-bold text-red-600">404</div>
        <div class="text-3xl text-gray-800">Η σελίδα δεν βρέθηκε</div>
        <a href="/" class="text-lg text-blue-600 hover:underline mt-4">
          Πίσω στην αρχική
        </a>
      </div>
    </Layout>
  );
}
