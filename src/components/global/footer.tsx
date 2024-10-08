import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} NextGen. Tous droits réservés.</p>
        <p>
          <a href="/privacy" className="hover:underline">Politique de confidentialité</a> |{" "}
          <a href="/terms" className="hover:underline">Conditions d'utilisation</a>
        </p>
        <p className="mt-2">Made with Love by Islam HACHIMI</p>
      </div>
    </footer>
  );
};

export default Footer;
