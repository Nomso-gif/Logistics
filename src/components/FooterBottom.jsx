const FooterBottom = () => {
  return (
    <div className="text-base sm:text-base py-4 bg-slate-900 text-center text-gray-400">
        <div className="border-t border-gray-700 mb-3"></div>
      &copy; {new Date().getFullYear()} NomsoLogistics. All rights reserved.
    </div>
  );
};

export default FooterBottom;
