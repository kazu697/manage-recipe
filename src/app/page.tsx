'use client'
import { List, ListItem } from "@tremor/react";
import { Button } from "@tremor/react";
import { useState } from "react";

type Recipe = {
  name: String;
  num: number;
}

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
  const [recipe, setReicpe] = useState<Recipe[]>(data);

  const addCount = (index: number) => {
    recipe[index].num++
    setReicpe([...recipe])
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          ManageRecipe
        </p>
        <List>
          {data.map((item, i) => (
            <ListItem key={i} className="px-2 py-2">
              <div>
                <span>{item.num}</span>
                <span>{item.name}</span>
              </div>
              <Button size="xs" variant="primary" onClick={() => {addCount(i)}}>Add</Button>
            </ListItem>
          ))}
        </List>
      </div>
    </main>
  )
}
