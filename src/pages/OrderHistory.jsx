import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import OngoingOrder from "../components/order/OngoingOrder";
import OrderHistoryComp from "../components/order/OrderHistoryComp";

const OrderHistory = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] py-5">
        <div className="ss-container flex justify-between">
          <h1 className=" text-2xl ramto">Orders History</h1>
          <p>Home / Your Orders_History</p>
        </div>
      </section>
      <section className="ss-container mt-11 order-history-ongoing">
        <Tabs>
          <TabList>
            <Tab>Ongoing</Tab>
            <Tab>History</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <OngoingOrder />
            </TabPanel>
            {/* initially not mounted */}
            <TabPanel>
              <OrderHistoryComp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default OrderHistory;
