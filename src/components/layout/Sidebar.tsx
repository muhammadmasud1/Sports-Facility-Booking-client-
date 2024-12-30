const { Sider } = Layout;
import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const loginUser = useAppSelector(selectCurrentUser);

  const role = loginUser?.user?.role;
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemGenerator(userPaths, userRole.USER);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        height: "100%",
        background: "#222",
      }}
    >
      <div className=" text-2xl h-16 text-white inline-flex justify-center items-center w-full">
        <Link to="/">
          <img
            className="w-44"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <Menu
        className="bg-[#222]"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
