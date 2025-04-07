import { useState } from "react";
import { Modal } from "../components/Modal";
import emailjs from "emailjs-com";

export const Email = ({ emailOpen, setEmailOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        setModalText("Message Sent!");
        setShowModal(true);
        setFormData({ from_name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch(() => {
        setModalText("Oops.. Something went wrong! Please try again."),
          setShowModal(true);
        setIsSending(false);
      });
  };

  return (
    <section
      id="email"
      className={`bg-gradient-orange fixed top-0 right-0 flex h-screen w-screen snap-start items-center justify-center transition-transform duration-1000 ease-in-out ${emailOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="w-150">
        <h2 className="font-xillian s:text-6xl s:mb-10 mb-6 text-center text-5xl md:text-7xl">
          Write Me a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="s:grid-cols-2 grid grid-cols-1 gap-4 px-8">
            <div className="">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.from_name}
                placeholder="Name"
                className="w-full rounded border border-white/10 bg-white/10 px-4 py-3 transition focus:border-[rgba(159,67,116,0.6)] focus:bg-blue-500/2 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
              />
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@email.com"
                className="w-full rounded border border-white/10 bg-white/10 px-4 py-3 focus:border-[rgba(159,67,116,0.6)] focus:bg-blue-500/4 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="px-8">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message..."
              className="w-full rounded border border-white/10 bg-white/10 px-4 py-3 focus:border-[rgba(159,67,116,0.6)] focus:bg-blue-500/5 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center gap-2">
            <div>
              {" "}
              <button
                type="button"
                className="min-w-32 cursor-pointer rounded-2xl border-2 border-white/60 bg-transparent px-6 py-3 text-white/80 transition duration-300 hover:border-white/10 hover:bg-white/70 hover:text-[rgb(182,94,61)] active:border-white/10 active:bg-white/70 active:text-[rgb(182,94,61)]"
                onClick={() => {
                  setEmailOpen(false);
                  window.location.hash = "#contact";
                }}
              >
                Cancel
              </button>
            </div>
            <div className="">
              {" "}
              <button
                type="submit"
                disabled={isSending}
                className={`s:px-5 cursor-pointer rounded-2xl border-2 px-3 py-3 transition duration-300 ${
                  isSending
                    ? "pointer-events-none border-white/10 bg-white/70 text-[rgb(182,94,61)]"
                    : "border-white/60 bg-transparent text-white/80 hover:border-white/10 hover:bg-white/70 hover:text-[rgb(182,94,61)] active:border-white/10 active:bg-white/70 active:text-[rgb(182,94,61)]"
                } `}
              >
                {isSending ? (
                  <>
                    <div className="mr-2 inline-block h-4 w-4 translate-y-[2px] animate-spin rounded-full border-2 border-[rgb(182,94,61)] border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </form>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            modalText={modalText}
            setEmailOpen={setEmailOpen}
          />
        )}
      </div>
    </section>
  );
};
