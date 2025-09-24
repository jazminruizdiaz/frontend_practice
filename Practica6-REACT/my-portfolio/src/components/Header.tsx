type HeaderProps = {
  isStudent: boolean;
};

const Header = ({ isStudent }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__name">Jazmin Ruiz Diaz</h1>
        <p className="header__tagline"> Frontend Developer in training </p>
        <p className="header__portfolio-type">
          {isStudent ? "Student Portfolio" : "Portfolio"}
        </p>
      </div>
    </header>
  );
};
export default Header;
