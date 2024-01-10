"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "../ui/Modal";
import Gallery from "../gallery";
import Info from "../Info";

export default function StoreSetupModal() {
  const product = usePreviewModal((state) => state.product);

  if (!product) {
    return null;
  }

  return (
    <Modal
      isOpen={storeSetupModal.isOpen}
      onClose={storeSetupModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12  lg:gap-x-8">
        store setup modal
        <input type="text" />
        <input type="text" />
      </div>
    </Modal>
  );
}
