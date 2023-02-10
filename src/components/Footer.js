import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/nicholas-roman-1847b81/"
        target="_blank"
      >
        Developers Profile.
      </a>

      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
