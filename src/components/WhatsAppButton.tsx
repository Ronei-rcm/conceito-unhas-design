
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  onClick: () => void;
}

export const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};
