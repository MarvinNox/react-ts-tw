import ButtonDisabled from "./components/ui/ButtonDisabled/ButtonDisabled";
import ButtonPrime from "./components/ui/ButtonPrime/ButtonPrime";
import ButtonSecondary from "./components/ui/ButtonSecondary/ButtonSecondary";

function App() {
  return (
    <div className="container mx-auto relative">
      <h1 className="text-6xl font-bold text-center mt-20">Hello World!</h1>
      <ButtonPrime>Prime</ButtonPrime>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonDisabled>Disabled</ButtonDisabled>

      <span className="px-2 py-1 mr-2 text-xs font-semibold text-white bg-green-500 rounded-full">
        Pro
      </span>
      <span className="px-2 py-1 mr-2 text-xs font-semibold text-gray-800 bg-gray-300 rounded-full">
        Free
      </span>

      <div className="p-4 w-2xs mt-4 border border-gray-400 rounded-sm">
        <h3 className="text-gray-300 text-3xl mb-0.5">Card Title</h3>
        <h5 className="text-gray-100 text-xl mb-3">Card Subtitle</h5>
        <p className="text-gray-50 text-xs mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          suscipit!
        </p>
        <ButtonPrime>Click</ButtonPrime>
        <ButtonSecondary>Click me</ButtonSecondary>
      </div>
    </div>
  );
}

export default App;
