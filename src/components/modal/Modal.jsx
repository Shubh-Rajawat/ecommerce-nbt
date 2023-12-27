import { IoClose } from "react-icons/io5";
const Modal = ({ open, onClose, children }) => {
  return (
    //backdrop
    <div
      // onClick={onClose}
      onClick={(e) => e.stopPropagation()}
      className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${
        open ? "visible bg-black/50" : "invisible"
      }`}
    >
      {/* modal */}

      <div
        // onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all select-none ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoClose className="text-xl" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
