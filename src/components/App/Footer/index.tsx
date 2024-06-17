function AppFooter() {
  return (
    <div className="text-center text-slate-300">
      <p className="text-xs">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
      <p className="text-xs">
        Developed by{" "}
        <a
          href="https://github.com/Karim-Muhammad"
          target="_blank"
          rel="noreferrer"
        >
          Karim Muhammad
        </a>
      </p>
    </div>
  );
}

export default AppFooter;
