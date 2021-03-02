import * as React from "react";
import { FiPlusCircle } from "react-icons/fi";
import DefaultLayout from "../../components/DefaultLayout";
import Offert from "../../components/Offert";

import useAsync from "../../hooks/useAsync";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const offers = [
  {
    companyName: "Microsoft",
    companyPerson: "Bill Gate",
    positionName: "Frontend Developer",
    description: "Working on our new website for Azure",
    vacants: 1,
    typeContract: "Full-time",
    area: ["front-end"],
    workType: "Remote Job",
  },
  {
    companyName: "Space X",
    companyPerson: "Elon Musk",
    positionName: "Ai developer",
    description: "Working on the launch to the moon",
    vacants: 3,
    typeContract: "Full-time",
    area: ["Data Base"],
    workType: "On site Job",
  },
  {
    companyName: "Facebook",
    companyPerson: "Ricky Martin",
    positionName: "Frontend Developer",
    description: "Working on our new social network",
    vacants: 1,
    typeContract: "Contractor Job",
    area: ["front-end"],
    workType: "Flexible Job",
  },
];

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <FiPlusCircle size={80} className="animate-spin" />
    </div>
  );
}

function ErrorScreen({ error }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center text-red fonttext-3xl">
      {error.message}
    </div>
  );
}

function Home(props) {
  const [jobOffers, setJobOffers] = React.useState(offers);
  const { loading, data, error, run } = useAsync();

  React.useEffect(() => {
    run(async () => {
      await delay(3000);
      return jobOffers;
    });
    console.log(data);
    return () => {
      console.log("clean up");
    };
  }, []);

  if (!data && loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }
  return (
    <DefaultLayout>
      {loading ? <LoadingScreen /> : null}
      <main className="lg:col-span-3 pt-10 px-5 lg:px-5">
        <h2 className="text-2xl">
          All Results: <span>{data.length}</span> Results Found
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 px-0 lg:px-10">
          {data.map((element, index) => (
            <Offert key={index} id={index} data={element} />
          ))}
        </div>
      </main>
    </DefaultLayout>
  );
}

export default Home;
