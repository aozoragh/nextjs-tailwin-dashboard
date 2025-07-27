import { Button } from "@material-tailwind/react";
import { FC } from "react";

const ServerErrorScreen: FC = () => (
  <div className="tw-w-full tw-flex-col tw-gap-2 tw-h-full tw-flex tw-justify-center tw-items-center tw-py-10">
    <h2>Something went wrong in server!</h2>
    <Button size="sm">Try again</Button>
  </div>
);

export default ServerErrorScreen;
