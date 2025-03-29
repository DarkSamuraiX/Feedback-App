import { create } from "framer-motion/client";
import { Children, createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children} => {
    return <FeedbackContext.Provider></FeedbackContext.Provider>
})
