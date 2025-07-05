"use client";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
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
  const {setIsLoading: userLoading} = useUser() ?? {}
  const handleLogout = ()=>{
    logout()
    userLoading?.(true)
  }
  const handleRouter = (path) => {
    router.push(path);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Rezwan" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleRouter("/admin")} key="admin">
          Admin
        </DropdownItem>
        <DropdownItem onClick={() => handleRouter("/profile")} key="profile">
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
          Claim Request
        </DropdownItem>

          <DropdownItem 
            onClick={() => handleLogout()}
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
