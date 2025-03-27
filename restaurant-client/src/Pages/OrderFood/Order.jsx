import React, { useState, useEffect } from "react";
import coverImage from "../../assets/shop/Order.jpg";
import SectionCover from "../../Components/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

export default function Order() {
  const categories = ["desserts", "soup", "salad", "pizza", "offered"];
  const { category } = useParams(); // Get category from URL params
  const [menu] = UseMenu();

  // Find initial index based on category in URL
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  useEffect(() => {
    if (category) {
      const index = categories.indexOf(category);
      setTabIndex(index !== -1 ? index : 0);
    }
  }, [category]);

  const filteredMenu = {
    desserts: menu.filter((item) => item.category === "desserts"),
    soup: menu.filter((item) => item.category === "soup"),
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    offered: menu.filter((item) => item.category === "offered"),
  };

  return (
    <>
      <section>
        <SectionCover img={coverImage} title="Order Food" />
        <br />
        <main className="md:my-10 my-3">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="text-center font-semibold mb-4">
              <TabList>
                {categories.map((cat, index) => (
                  <Tab key={index}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Tab>
                ))}
              </TabList>
            </div>

            {categories.map((cat, index) => (
              <TabPanel key={index}>
                <OrderTab items={filteredMenu[cat]} />
              </TabPanel>
            ))}
          </Tabs>
        </main>
      </section>
    </>
  );
}
