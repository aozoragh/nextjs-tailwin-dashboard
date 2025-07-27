import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// @material-tailwind/react
import {
  Navbar,
  Typography,
  IconButton,
  Breadcrumbs,
  Input,
} from "@material-tailwind/react";

// @heroicons/react

import {
  UserCircleIcon,
  HomeIcon,
  Bars3Icon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";

import { UserButton, useUser } from "@clerk/nextjs";
import { setOpenSidenav, useMaterialTailwindController } from "@/context";

export function DashboardNavbar() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((el) => el !== "");

  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;

  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <Navbar
      className={`tw-rounded-xl !tw-transition-all !tw-max-w-full ${"!tw-sticky tw-top-4 tw-z-40 !tw-py-3 tw-shadow-md tw-shadow-blue-gray-500/5"}`}
      fullWidth
      blurred={true}
    >
      <div className="!tw-flex tw-flex-col !tw-justify-between tw-gap-2 md:!tw-flex-row md:tw-items-center">
        <Breadcrumbs
          className={`!tw-p-0 !tw-pr-2 tw-transition-all ${"tw-mt-1"}`}
        >
          <Link href="/dashboard">
            <IconButton size="sm" variant="text">
              <HomeIcon className="tw-h-4 tw-w-4 tw-text-gray-900" />
            </IconButton>
          </Link>
          {paths.map((path, index) => {
            // Construct the link href based on the path array
            const href = "/" + paths.slice(0, index + 1).join("/");

            return (
              <Link key={`routing_${index}`} href={href}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className={`!tw-font-normal tw-opacity-50 tw-transition-all hover:!tw-text-blue-gray-700 hover:tw-opacity-100 ${
                    index === paths.length - 1
                      ? "tw-font-bold !tw-opacity-100"
                      : ""
                  }`}
                >
                  {path}
                </Typography>
              </Link>
            );
          })}
          {/* <Typography
            variant="small"
            color="blue-gray"
            className="!tw-font-normal"
          >
            {page?.split("-").join(" ")}
          </Typography> */}
        </Breadcrumbs>
        <div className="!tw-flex tw-items-center">
          <div className="tw-mr-auto md:tw-mr-4 md:tw-w-56">
            <Input label="Search" />
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="tw-grid xl:tw-hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            {openSidenav ? (
              <Bars3Icon
                strokeWidth={3}
                className="tw-h-6 tw-w-6 tw-text-gray-900"
              />
            ) : (
              <Bars3CenterLeftIcon
                strokeWidth={3}
                className="tw-h-6 tw-w-6 tw-text-gray-900"
              />
            )}
          </IconButton>
          {/* <IconButton
            variant="text"
            color="gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="tw-h-5 tw-w-5 tw-text-gray-900" />
          </IconButton>
          <Menu>
            <MenuHandler>
              <span>
                <Badge>
                  <IconButton variant="text">
                    <BellIcon className="tw-h-5 tw-w-5 tw-text-gray-900" />
                  </IconButton>
                </Badge>
              </span>
            </MenuHandler>
            <MenuList className="!tw-w-max tw-border tw-border-blue-gray-100">
              <MenuItem className="tw-flex tw-items-center tw-gap-2">
                <EnvelopeIcon className="tw-h-5 tw-w-5 tw-text-gray-900" />
                <Typography variant="small" className="!tw-font-normal">
                  Check new messages
                </Typography>
              </MenuItem>
              <MenuItem className="tw-flex tw-items-center tw-gap-2">
                <MicrophoneIcon className="tw-h-5 tw-w-5 tw-text-gray-900" />
                <Typography variant="small" className="!tw-font-normal">
                  Manage Podcast sessions
                </Typography>
              </MenuItem>
              <MenuItem className="tw-flex tw-items-center tw-gap-2">
                <ShoppingCartIcon className="tw-h-5 tw-w-5 tw-text-gray-900" />
                <Typography variant="small" className="!tw-font-normal">
                  Payment successfully completed
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu> */}
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/login">
              <IconButton variant="text">
                <UserCircleIcon className="tw-h-5 tw-w-5 tw-text-blue-gray-900" />
              </IconButton>
            </Link>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default DashboardNavbar;
