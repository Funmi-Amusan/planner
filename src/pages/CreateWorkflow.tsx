import { StepsDemo } from "../components/dashboard/stepper";
import Layout from "../components/layout2/layout";

const CreateWorkflow = () => {
    return (
        <Layout>
            <div className=" my-10">
                <h2>Check in</h2>

                <div>
                    <StepsDemo />
                </div>
            </div>
        </Layout>
    );
};

export default CreateWorkflow;
