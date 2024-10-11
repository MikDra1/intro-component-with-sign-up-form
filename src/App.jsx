import { useState } from "react";
import Discount from "./components/Discount";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

function App() {
  const [isFinished, setIsFinished] = useState(false)


  return (
    <div className="container  ">
      <div className="lg:flex lg:flex-row lg:px-[8.25%] xl:px-[7.5rem] items-center justify-center max-w-[1440px]">
      <div className="lg:max-w-[50%] lg:ml-3 ">
        <h1 className="text-white font-semibold text-3xl text-center mb-6 mt-16 lg:text-start lg:text-[3.35rem] leading-none  ">
          Learn to code by watching others
        </h1>
        <p className="text-center text-white px-2 mb-8 lg:text-start lg:text-md lg:max-w-[55ch] ">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="lg:w-[79%] space-y-10">
        <Discount />
        <Form setIsFinished={setIsFinished} />
      </div>
      </div>

      {isFinished && <ThankYou  />}
    </div>
  );
}

export default App;
