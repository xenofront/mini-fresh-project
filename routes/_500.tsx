import { ErrorPageProps } from '$fresh/server.ts';
import Layout from '../components/structure/layout.tsx';

export default function _500Page({error}: ErrorPageProps) {
  return (
    <Layout>
      <div class="flex flex-col justify-center items-center">
        <div class="text-6xl font-bold text-red-600">500</div>
        <div class="text-3xl text-gray-800">
          internal error: {(error as Error).message}
        </div>
      </div>
    </Layout>
  );
}
