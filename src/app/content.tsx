import React from "react";

import routes from "@/routes";

import { Card } from "@material-tailwind/react";
import { DashboardNavbar } from "@/widgets/layout";

import Sidenav from "@/widgets/layout/sidenav";

import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

import logo from "@public/img/logo.png";
import logo_dark from "@public/img/logo-dark.png";
import { useUser } from "@clerk/nextjs";

import LoadingScreen from "@/widgets/loading/loading-screen";

export default function InnerContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return <LoadingScreen />;

  if (isSignedIn && isLoaded)
    return (
      <div className="tw-relative !tw-min-h-screen tw-bg-blue-gray-50/50">
        <div className={`tw-p-4 xl:tw-ml-80 tw-space-y-6`}>
          <Card className="!tw-static tw-w-full tw-h-full tw-bg-white tw-rounded-xl tw-py-2 tw-px-3">
            {children}
          </Card>
        </div>
      </div>
    );

  return (
    <div className="!tw-min-h-screen tw-bg-blue-gray-50/50">{children}</div>
  );
}
