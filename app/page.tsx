import CatImage from '@/components/CatImage';
import CatFact from '@/components/CatFact';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Meet the Cat</h1>
      <CatImage />
      <CatFact />
    </main>
  );
}
