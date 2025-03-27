import React, { useState } from "react";
import coverImage from "../../assets/shop/Order.jpg";
import SectionCover from "../../Components/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";

export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <section>
        <SectionCover img={coverImage} title={"Order Food"} />
        <br />
        <main className="md:my-10 my-3">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => console.log(index)}
          >
            <div className=" text-center font-semibold mb-4">
              <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Dessert</Tab>
                <Tab>Offered</Tab>
                <Tab>Soup</Tab>
              </TabList>
            </div>
            <TabPanel>
              <OrderTab items={salad} key={salad?._id} />
              {/* send salad to order tab */}
            </TabPanel>

            <TabPanel>
              <OrderTab items={pizza} key={pizza?._id} />
            </TabPanel>

            <TabPanel>
              <OrderTab items={desserts} key={desserts._id} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={offered} key={offered._id} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} key={soup._id} />
            </TabPanel>
          </Tabs>
        </main>
      </section>
    </>
  );
}
