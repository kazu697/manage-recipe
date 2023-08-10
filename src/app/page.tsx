'use client'
import { 
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,

} from "@tremor/react";
import { Recipe } from "@/components/recipe";


const data = [
  {
    name: "Pot-au-feu",
    num: 1,
  },
  {
    name: "Udon",
    num: 1,
  },
  {
    name: "Curry",
    num: 1,
  },
  {
    name: "stew",
    num: 1,
  },
];

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          ManageRecipe
        </p>
        <TabGroup>
          <TabList>
            <Tab>レシピ</Tab>
            <Tab>材料</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Recipe recipes={data}></Recipe>
            </TabPanel>
            <TabPanel>
              <div>test</div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  )
}
