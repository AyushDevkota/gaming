import React from "react";
import { Navbar, Footer, Section } from "../../components/Reusable";
import {
  Overview,
  WatchLive,
  Scoring,
  Rules,
  Participants,
  PrizePool,
} from "../../components/Browse";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Head from "next/head";

const tabStyles = "px-5 pb-2 cursor-pointer";
const activeTabStyles = "text-white border-b-4 border-b-white outline-none";

const TABS = [
  {
    id: 1,
    value: "Overview",
  },
  {
    id: 2,
    value: "Participants",
  },
  {
    id: 3,
    value: "Watch Live",
  },
  {
    id: 4,
    value: "Prize Pool",
  },
  {
    id: 5,
    value: "Scoring",
  },
  {
    id: 6,
    value: "Rules",
  },
];

const browseDetail = () => {
  return (
    <>
      <Head>
        <title>Gaming | Detail</title>
      </Head>
      <Navbar />
      <Section>
        <div className="relative">
          <Image
            src="/browse-overview.png"
            alt=""
            width="100%"
            height="40%"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="grid  grid-cols-[65%_20%] justify-between mt-12">
          <div className="">
            <Tabs>
              <TabList className="flex border-b border-b-light text-light text-sm mb-8">
                {TABS.map((el) => (
                  <Tab
                    className={tabStyles}
                    selectedClassName={activeTabStyles}
                    key={el.id}
                  >
                    {el.value}
                  </Tab>
                ))}
              </TabList>
              <TabPanel>
                <Overview />
              </TabPanel>
              <TabPanel>
                <Participants />
              </TabPanel>
              <TabPanel>
                <WatchLive />
              </TabPanel>
              <TabPanel>
                <PrizePool />
              </TabPanel>
              <TabPanel>
                <Scoring />
              </TabPanel>
              <TabPanel>
                <Rules />
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <button className="bg-[#ff3338] py-3 text-xs uppercase w-full rounded">
              join tournament
            </button>
            <div className="border-b border-b-light py-4">
              <p className="opacity-70">Organized By</p>
              <p>Evictus Gaming</p>
            </div>
            <div className="border-b border-b-light py-4">
              <p className="opacity-70">Event Date</p>
              <p>21 July 2022</p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default browseDetail;
