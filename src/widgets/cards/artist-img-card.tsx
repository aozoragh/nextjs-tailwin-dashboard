"use client";

import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Card, IconButton } from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";

interface ArtistImageCardProps {
  img: File;
  onRemove?: () => void;
}

const ArtistImageCard: FC<ArtistImageCardProps> = ({ img, onRemove }) => {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(img);
    setPreviewUrl(objectUrl);

    // Extract dimensions
    const image = new Image();
    image.onload = () => {
      setDimensions({ width: image.width, height: image.height });
    };
    image.src = objectUrl;

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [img]);

  const sizeInMB = (img.size / (1024 * 1024)).toFixed(1);

  return (
    <Card className="tw-relative tw-flex !tw-flex-row tw-justify-start tw-items-center tw-gap-4 tw-overflow-hidden tw-p-2">
      <div className="tw-flex tw-flex-col fh:tw-flex-row tw-justify-start tw-gap-4 tw-items-center tw-w-full">
        <img
          alt="artist cover"
          src={previewUrl}
          className="tw-w-full fh:tw-w-auto tw-object-cover tw-h-24 tw-rounded-md"
          height={97}
          width={162}
        />
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-2 tw-pb-4 fh:tw-pb-0">
          <span className="tw-text-xl">{img.name}</span>
          <span className="tw-text-sm tw-opacity-35">
            {sizeInMB}mb
            {dimensions && ` - ${dimensions.width}x${dimensions.height}`}
            {img.type && ` - ${img.type}`}
          </span>
        </div>
      </div>
      <div className="tw-absolute fh:tw-static tw-top-1 tw-right-1 tw-flex tw-justify-end tw-items-center tw-gap-1 lg:tw-gap-2 tw-mr-2">
        <IconButton variant="text" size="sm">
          <Bars3BottomRightIcon className="tw-h-6 tw-w-6" />
        </IconButton>
        <IconButton variant="text" size="sm" onClick={onRemove}>
          <XCircleIcon className="tw-h-6 tw-w-6 tw-text-[#D02B68]" />
        </IconButton>
      </div>
    </Card>
  );
};

export default ArtistImageCard;
