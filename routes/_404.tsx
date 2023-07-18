import Layout from '../components/structure/Layout.tsx';
import HistoryButton from '../islands/HistoryButton.tsx';

export default function _404Page() {
  return (
    <Layout>
      <div class="flex flex-col justify-center items-center">
        <div class="text-6xl font-bold text-red-600">404</div>
        <div class="text-3xl text-gray-800">Η σελίδα δεν βρέθηκε</div>
        <HistoryButton
          text="Πλοήγηση πίσω"
          direction="back"
          classes="text-lg text-blue-600 hover:underline mt-4"
        />
      </div>
    </Layout>
  );
}
