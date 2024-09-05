import React, { useState, useRef } from "react";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";

export const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: "Personal",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "First Step",
                    detail: event.item.label
                });
            }
        },
        {
            label: "Seat",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Seat Selection",
                    detail: event.item.label
                });
            }
        },
        {
            label: "Payment",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Pay with CC",
                    detail: event.item.label
                });
            }
        },
        {
            label: "Confirmation",
            command: (event) => {
                toast.current.show({
                    severity: "info",
                    summary: "Last Step",
                    detail: event.item.label
                });
            }
        }
    ];

    return (
        <div className="steps-demo">
            <Toast ref={toast}></Toast>

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
