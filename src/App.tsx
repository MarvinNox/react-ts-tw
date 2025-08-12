import ButtonDisabled from "./components/ui/ButtonDisabled/ButtonDisabled";
import ButtonPrime from "./components/ui/ButtonPrime/ButtonPrime";
import ButtonSecondary from "./components/ui/ButtonSecondary/ButtonSecondary";
import Header from "./components/ui/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto relative px-4">
        <h1 className="text-6xl font-bold text-center my-2">Hello World!</h1>
        <ButtonPrime>Prime Button</ButtonPrime>
        <ButtonSecondary>Sec Button</ButtonSecondary>
        <ButtonDisabled>Disab Button</ButtonDisabled>

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

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-3">Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              nesciunt voluptatum perferendis autem minima ut quis repellendus
              ratione dolor, soluta nam obcaecati. Doloribus minima tenetur
              provident iure sequi dignissimos vero.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              className="rounded-2xl h-auto max-w-full"
              src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
