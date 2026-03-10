import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-lg tracking-[0.2em] uppercase text-champagne mb-6">
              Harrington & Associates
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Preserving generational wealth with absolute discretion since 1947.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-body">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "Legacy", "Portal"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-foreground/70 hover:text-champagne transition-colors font-body"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-body">
              Contact
            </h4>
            <p className="text-sm text-foreground/70 font-body leading-relaxed">
              By appointment only.<br />
              London · Zurich · Singapore<br />
              <span className="text-champagne">inquiries@harrington.com</span>
            </p>
          </div>
        </div>
        <div className="divider-gold mb-8" />
        <p className="text-center text-xs text-muted-foreground tracking-widest font-body">
          © {new Date().getFullYear()} Harrington & Associates. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
