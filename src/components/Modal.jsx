export const Modal = ({ modalText, setShowModal, setEmailOpen }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center rounded-2xl border-white bg-pink-700/5 px-20 py-12 text-center text-white/60 shadow-inner backdrop-blur-xl transition">
        <p className="mb-10 text-xl">{modalText}</p>
        <button
          onClick={() => {
            setShowModal(false);
            setTimeout(() => {
              setEmailOpen(false);
              window.location.hash = "#contact";
            }, 300);
          }}
          className="cursor-pointer rounded-xl border-2 border-white/10 bg-white/40 px-5 py-[0.2rem] text-lg text-[rgb(116,52,81)] transition duration-300 hover:border-white/70 hover:bg-white/10 hover:text-white/90"
        >
          Okay
        </button>
      </div>
    </div>
  );
};
