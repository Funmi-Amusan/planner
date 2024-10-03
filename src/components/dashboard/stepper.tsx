import React, { useState, useRef } from "react";
import { Steps } from "primereact/steps";

export const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);

    return (
        <div className="steps-demo">
            <div className="card">
                <h5>Basic</h5>
                <Steps model={items} />

                <h5>Interactive</h5>
                <Steps
                    model={items}
                    activeIndex={activeIndex}
                    onSelect={(e) => setActiveIndex(e.index)}
                    readOnly={false}
                />
            </div>
        </div>
    );
};
