"use client";

import { Dispatch, FC } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  IconButton,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { Loader } from "lucide-react";
import { useModalStore } from "@/store/modalStore";

interface ConfirmModalProps {
  header: string;
  msg: string;
  handleOk?: () => void;
  loading?: boolean;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  header,
  msg,
  handleOk,
  loading,
}) => {
  const { confirmDeleteModalOpen, setConfirmDeleteModalOpen } = useModalStore(
    (state) => state
  );

  const handleYesButton = () => {
    if (handleOk) {
      handleOk();
    }
  };
  return (
    <Dialog
      open={confirmDeleteModalOpen}
      handler={setConfirmDeleteModalOpen}
      className="tw-bg-gray-50 fh:!tw-min-w-96 !tw-max-w-[96%] fh:!tw-max-w-96"
    >
      <DialogHeader className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-gray-200">
        <Typography
          variant="h3"
          className="tw-text-xl sm:tw-text-2xl tw-flex tw-items-center tw-justify-start tw-gap-2"
        >
          {header}
        </Typography>
        <IconButton
          onClick={() => setConfirmDeleteModalOpen(false)}
          variant="text"
        >
          <XCircleIcon className="tw-h-6 tw-w-6 tw-text-[#D02B68]" />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <Typography className="tw-text-center tw-text-gray-700 tw-text-lg tw-font-bold">
          {msg}
        </Typography>
      </DialogBody>
      <DialogFooter className="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-border-t tw-border-gray-200">
        <Button
          size="sm"
          color="red"
          variant="gradient"
          className="tw-w-[40%] tw-flex tw-justify-center tw-items-center tw-gap-1"
          onClick={() => setConfirmDeleteModalOpen(false)}
        >
          No
        </Button>
        <Button
          color="blue"
          size="sm"
          variant="gradient"
          className="tw-w-[40%] tw-flex tw-justify-center tw-items-center tw-gap-1"
          onClick={handleYesButton}
          disabled={loading}
        >
          {loading && <Loader size={16} className="tw-animate-spin" />}
          Yes
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmModal;
