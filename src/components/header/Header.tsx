import { BContainer, BIcon } from "@/components/elements";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border border-border/5 backdrop-blur-xl h-16 flex flex-col items-center justify-center">
      <BContainer paddings="exclude" className="w-full px-6 h-auto">
        <div className="w-full flex items-center justify-between">
          <div>
            <Link href="/">
              <p className="text-2xl font-bold text-primary first-letter:font-black first-letter:text-3xl first-letter:uppercase">
                b
              </p>
            </Link>
          </div>
          <nav className="flex items-center justify-center">
            <Button variant="default" className="uppercase gap-2">
              Get In Touch
              <BIcon icon="SendIcon" className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </BContainer>
    </header>
  );
};

export default Header;
