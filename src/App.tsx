import ButtonDisabled from "./components/ui/ButtonDisabled/ButtonDisabled";
import ButtonPrime from "./components/ui/ButtonPrime/ButtonPrime";
import ButtonSecondary from "./components/ui/ButtonSecondary/ButtonSecondary";

function App() {
  return (
    <>
      <header className="border-b border-b-gray-300 text-white">
        <div className="container mx-auto flex justify-between p-2">
          <a
            href="/"
            className="text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)]"
          >
            SimpleLogo
          </a>
          <nav className="md:ml-auto">
            <ul className="flex gap-2 text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)]">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <svg
              className="fill-white md:hidden"
              width="20"
              height="16"
              viewBox="0 0 20 16"
            >
              <path d="M0 1.5C0 0.947715 0.447716 0.5 1 0.5H19C19.5523 0.5 20 0.947715 20 1.5V2.5C20 3.05228 19.5523 3.5 19 3.5H1C0.447715 3.5 0 3.05228 0 2.5V1.5Z" />
              <path d="M0 7.5C0 6.94772 0.447716 6.5 1 6.5H19C19.5523 6.5 20 6.94772 20 7.5V8.5C20 9.05228 19.5523 9.5 19 9.5H1C0.447715 9.5 0 9.05229 0 8.5V7.5Z" />
              <path d="M1 12.5C0.447716 12.5 0 12.9477 0 13.5V14.5C0 15.0523 0.447715 15.5 1 15.5H19C19.5523 15.5 20 15.0523 20 14.5V13.5C20 12.9477 19.5523 12.5 19 12.5H1Z" />
            </svg>
          </div>
        </div>
      </header>
      <div className="container mx-auto relative">
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
      </div>
    </>
  );
}

export default App;
