export function Header() {
  return (
    <>
      <header className="w-full  bg-green-500 p-4 flex justify-between">
        <span className="bg-white text-black p-1">Logo</span>
        <nav className="p-1">
          <ul className="flex gap-10 items-center h-full">
            <li className="bg-green-800 rounded-xl hover:bg-green-400 transition-all ease-linear">
              <a href="#" className="p-4 h-3">
                Link 1
              </a>
            </li>
            <li className="bg-green-800 rounded-xl hover:bg-green-400 transition-all ease-linear ">
              <a href="#" className="p-4">
                Link 2
              </a>
            </li>
            <li className="bg-green-800 rounded-xl hover:bg-green-400 transition-all ease-linear">
              <a href="#" className="p-4">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
