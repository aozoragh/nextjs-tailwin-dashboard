"use client";

import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useRef, useState } from "react";

import axios from "@/lib/axios";
import { toast } from "sonner";

export default function UploadBox({
  label,
  guide = "Size guide: (996 x 561)",
  file,
  setFile,
}: {
  label: string;
  guide?: string;
  file: File | null;
  setFile: (file: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // <-- Reset file input
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/cash-out/receipt-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Receipt is uploaded successfully.");
    } catch (error) {
      toast.error("Receipt uploading failed.");
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-gap-1">
      <label className="tw-text-sm tw-font-medium tw-text-gray-700">
        {label}
      </label>
      <div
        className="tw-w-full tw-min-h-[40px] tw-flex tw-items-center tw-justify-between tw-bg-[#2e2e2e] tw-rounded-lg tw-px-3 tw-cursor-pointer"
        onClick={handleClick}
      >
        <span className="tw-text-gray-400 tw-text-sm truncate">
          {file ? file.name : guide}
        </span>

        {/* Icon placeholder (replace with actual upload icon if needed) */}
        {/* <div className="tw-text-white tw-text-2xl">⬆️</div> */}
        <DocumentArrowUpIcon className="tw-h-5 tw-w-5 tw-text-white" />

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="tw-hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
