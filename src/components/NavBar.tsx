export default function NavBar() {
  return (
    <header>
      <ul className="flex border rounded-b border-t-[0]">
        <li className="flex flex-1 text-center p-[0.625rem] border-r ">
          <a href="./" className="text-[1rem]/[1] mx-auto">
            Усі
          </a>
        </li>
        <li className="flex flex-1 text-center p-[0.625rem] border-r">
          <a href="./personal" className="text-[1rem]/[1] mx-auto">
            Особисте
          </a>
        </li>
        <li className="flex flex-1 text-center p-[0.625rem] border-r">
          <a href="./work" className="text-[1rem]/[1] mx-auto">
            Робота
          </a>
        </li>
        <li className="flex flex-1 text-center p-[0.625rem]">
          <a href="./study" className="text-[1rem]/[1] mx-auto">
            Навчання
          </a>
        </li>
      </ul>
    </header>
  );
}
