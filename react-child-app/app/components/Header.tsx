import Link from "next/link"; //permite fazer a navegação sem recarregar a página por inteiro

export function Header() {
  return (
    <>
      <header className="py-5 bg-cyan-300 w-full flex items-center justify-center">
        <nav className="w-36 flex justify-between">
          <Link href="/register">Register</Link>
          <Link href="/singin">SingIn</Link>
        </nav>
      </header>
    </>
  );
}
