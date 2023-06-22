import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useState } from "react";
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: "auto",
                height: {
                    sx: "auto",
                    md: "95%",
                },
                gap: 2,
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`flex items-center gap-4 text-xl rounded-full px-4 py-1 ${
                        selectedCategory === category.name && "bg-[#FC1503]"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    {
                        <category.icon
                            style={{
                                color:
                                    selectedCategory === category.name
                                        ? "white"
                                        : "red",
                            }}
                        />
                    }
                    <span
                        style={{
                            opacity:
                                selectedCategory === category.name ? 1 : 0.8,
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;
