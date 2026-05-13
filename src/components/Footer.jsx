function Footer() {
    return (
      <footer className="py-6 text-center bg-white dark:bg-gray-950 border-t dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Shallen Mwende. All Rights Reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;