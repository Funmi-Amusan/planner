import React, { useState, useRef } from "react";
import { Steps } from "primereact/steps";

export const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);

    return <div className="steps-demo"></div>;
};
