import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <p>LinkedIn: https://www.linkedin.com/in/nicholas-roman-1847b81/ </p>

      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
