import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Let's work together or just say hi!</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:elshid@example.com" className="hover:underline">
          <Mail className="inline mr-2" /> elshid@example.com
        </a>
        <a href="https://m.me/elshidpage" className="hover:underline" target="_blank">
          <MessageCircle className="inline mr-2" /> Messenger
        </a>
      </div>
    </section>
  );
};

export default Contact;
