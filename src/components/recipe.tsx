'use client'
import { 
    List, 
    ListItem,
    Button
} from "@tremor/react";

import React, { useState } from "react";

type Recipe = {
    name: String;
    num: number;
}

type RecipeProps = {
    recipes: Recipe[]
}
export const Recipe: React.FC<RecipeProps> = ({recipes}) => {
    const [recipe, setReicpe] = useState<Recipe[]>(recipes);

    const addCount = (index: number) => {
        recipe[index].num++
        setReicpe([...recipe])
    }

    return (
        <List>
            {recipe.map((item, i) => (
                <ListItem key={i} className="px-2 py-2">
                <div>
                    <span>{item.num}</span>
                    <span>{item.name}</span>
                </div>
                <Button size="xs" variant="primary" onClick={() => {addCount(i)}}>Add</Button>
                </ListItem>
            ))}
        </List>
    )
}