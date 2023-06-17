import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
    Navbar,
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from "./components";
function App() {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: "#000" }} className='text-white'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/video/:id' element={<ChannelDetail />} />
                    <Route path='/video/:id' element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
