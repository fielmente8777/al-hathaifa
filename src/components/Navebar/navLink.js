import { useServerProvidersContext } from "../../context/ServerProvider";
const Nav_Links = () => {
  const { slugs, IsNavBar } = useServerProvidersContext();
  const slug = Object.values(slugs).map((page) => page.Slug);
  const Links = [
    {
      isNavBar: IsNavBar["Home"],
      linkName: "Home",
      src: "/",
    },
    {
      isNavBar: IsNavBar["About"],
      linkName: "About Us",
      src: `/${slug[0]}`,
    },
    {
      isNavBar: IsNavBar["Service"],
      linkName: "Our Service",
      src: `/${slug[12]}`,
    },
    {
      isNavBar: IsNavBar["Room"],
      linkName: "Rooms",
      src: `/${slug[11]}`,
    },
    {
      isNavBar: IsNavBar["Restaurant"],
      linkName: "Resturant",
      src: `/${slug[10]}`,
    },
    {
      isNavBar: IsNavBar["Contact"],
      linkName: "Contact Us",
      src: `/${slug[3]}`,
    },
  ];
  return Links;
};
export default Nav_Links;






