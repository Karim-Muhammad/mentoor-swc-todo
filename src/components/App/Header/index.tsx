import avatar from "../../../assets/avatar2.svg";

function AppHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Todo Apps</h1>
      <div className="w-16 h-16 grid place-content-center transition-all hover:bg-slate-600 rounded-full">
        <img
          src={avatar}
          className="cursor-pointer w-14 h-14 rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default AppHeader;
