// @mui material components
import Icon from "@mui/material/Icon";
// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Home from "pages/Home";
import ContactUs from "pages/Contact";
// import AboutUs from "pages/About-us";
import Templates from "pages/Templates";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    dropdown: false,
    route: "/home",
    component: <Home />,
  },
  {
    name: "About Me",
    icon: <Icon>person</Icon>,
    route: "/about-us",
    dropdown: false,
    // component: <AboutUs />,
  },
  {
    name: "Contact Me",
    icon: <Icon>contacts</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
    dropdown: false,
  },
  {
    name: "Templates",
    icon: <Icon>web</Icon>,
    route: "/templates",
    dropdown: false,
    component: <Templates />,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    dropdown: false,
    href: "https://github.com/umagol/GitHub-Profile-Generator",
  },
];

export default routes;
