import { ThemeToggle } from "@/components/settings";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur h-16 flex items-center">
      <div className="container flex items-center justify-between">
        <div>
          <p className="text-xl font-bold text-primary uppercase">
            boostiology
          </p>
        </div>
        <nav>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
