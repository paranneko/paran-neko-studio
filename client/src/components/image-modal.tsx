import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
    title: string;
    description: string;
    details: Array<{ label: string; value: string }>;
  };
}

export function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal-backdrop max-w-4xl w-full max-h-[90vh] p-0 gap-0 border-0 rounded-3xl overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{image.title}</DialogTitle>
          <DialogDescription>{image.description}</DialogDescription>
        </VisuallyHidden>
        <div className="grid lg:grid-cols-2 h-full">
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12 overflow-y-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">{image.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              {image.description}
            </p>
            <div className="space-y-4 mb-8">
              {image.details.map((detail, index) => (
                <div key={index} className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium text-foreground">{detail.label}:</span>
                  <span className="text-muted-foreground">{detail.value}</span>
                </div>
              ))}
            </div>
            <Button 
              className="w-full py-6 text-lg font-medium rounded-full bg-primary hover:bg-primary/90"
              onClick={() => {
                // In a real app, this would open a contact form or redirect
                alert("Contact form would open here in a real implementation");
              }}
            >
              Request Similar Design
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
