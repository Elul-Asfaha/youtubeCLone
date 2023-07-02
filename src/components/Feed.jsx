import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/FetchFromApi";
import { SideBar, Videos } from "./";
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
            setVideos(data.items)
        );
    }, [selectedCategory]);

    return (
        <Stack
            sx={{
                flexDirection: {
                    xs: "colum",
                    md: "row",
                },
            }}
        >
            <Box
                sx={{
                    height: { xs: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { xs: 0, md: 2 },
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <div className='sm:hidden md:block'>
                    <Typography
                        className=''
                        variant='body2'
                        sx={{ mt: 1.5, color: "#fff" }}
                    >
                        Copyright 2023 Elul Media
                    </Typography>
                </div>
            </Box>

            <Box
                sx={{
                    overflowY: "auto",
                    height: "90vh",
                    flex: 2,
                    paddingX: { md: 2 },
                }}
            >
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ color: "white" }}
                >
                    {selectedCategory}
                    <span className='text-[#FC1503]'> Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
