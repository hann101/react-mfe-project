import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import AcUnitIcon from "@mui/icons-material/AcUnit";

// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function Main() {
  return (
    <>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
            // you can use your own custom Icon component as well
            // icon is optional
            elemBefore: () => <AcUnitIcon name="inbox" />
          },
          {
            title: "Management",
            itemId: "/management",
            elemBefore: () => <AcUnitIcon name="users" />,
            subNav: [
              {
                title: "Projects",
                itemId: "/management/projects",
                // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                elemBefore: () => <AcUnitIcon name="cloud-snow" />
              },
              {
                title: "Members",
                itemId: "/management/members",
                elemBefore: () => <AcUnitIcon name="coffee" />
              }
            ]
          },
          {
            title: "Another Item",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams"
              }
            ]
          }
        ]}
      />
    </>
  );
}

export default Main;
