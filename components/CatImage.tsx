export default function CatImage() {
  return (
    <div className="w-64 h-64 mb-6">
      <img
        src="https://cataas.com/cat?width=256&height=256"
        alt="Cute cat"
        className="w-full h-full object-cover rounded-full shadow-lg"
      />
    </div>
  );
}
