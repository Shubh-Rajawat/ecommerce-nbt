import { IoClose } from "react-icons/io5";
const Modal = ({ open, onClose, children }) => {
  return (
    //backdrop
    <div
      // onClick={onClose}
      // onClick={(e) => {
      //   // e.stopPropagation();
      //   onClose();
      // }}
      className={`fixed inset-0 flex justify-center z-[9999] items-center transition-colors ${
        open ? "visible bg-black/50" : "invisible"
      }`}
    >
      {/* modal */}

      <div
        // onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-[16px] shadow transition-all select-none overflow-hidden ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={(e) => {
            onClose();
          }}
          className="absolute top-2 right-2 cursor-pointer p-1 rounded-lg text-gray-400 z-40 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoClose className="text-xl" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
