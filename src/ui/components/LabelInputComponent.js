import Swal from 'sweetalert2';
import { FiEye, FiEyeOff, FiTrash } from "react-icons/fi";

export function LabelInputComponent({ title, show, setShow, deleteItem }) {
  return (
    <div className="flex justify-between">
      <h2 className="block text-md font-semibold text-gray-600 uppercase">
        {title}
      </h2>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
          className={`rounded-md text-white w-8 h-8 flex justify-center items-center cursor-pointer ${
            show ? "bg-slate-800" : "bg-gray-400"
          }`}
        >
          {show ? <FiEye /> : <FiEyeOff />}
        </button>
        <button
          type="button"
          onClick={() => {
            Swal.fire({
              title: 'Anda yakin ingin menghapus item ini?',
              text: 'Item yang dihapus tidak dapat dipulihkan!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Ya, hapus!',
              cancelButtonText: 'Batal'
            }).then((result) => {
              if (result.isConfirmed) {
                deleteItem();
              }
            });
          }}
          className="rounded-md bg-red-500 w-8 h-8 flex justify-center items-center cursor-pointer"
        >
          <FiTrash color="#fff" />
        </button>
      </div>
    </div>
  );
}

