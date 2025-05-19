"use client";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const router = useRouter();
  const handleRouter = (path) => {
    router.push(path);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Rezwan" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleRouter("/profile")} key="new">
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleRouter("/profile/settings")}
          key="copy"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleRouter("/profile/create-post")}
          key="edit"
        >
          Create Post
        </DropdownItem>

        <DropdownItem
          onClick={() => handleRouter("/profile/claim-requests")}
          key="claim"
        >
          Create Post
        </DropdownItem>

        <DropdownItem
          onClick={() => handleRouter("/profile/claim-requests")}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
