import { useNavigate } from "react-router-dom";

import ExclamationIcon from "@src/components/icons/ExclamationIcon";
import ArrowRightIcon from '@src/components/icons/ArrowRightIcon';

interface ErrorPageProps {
  errorCode?: string
  title?: string
  description?: string
}

export const Error = ({
  errorCode = "404 error",
  title = "Page not found.",
  description = "Sorry, we couldn't find the page you're looking for"
}: ErrorPageProps) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center space-y-4">
      <ExclamationIcon />
      <h3 className="text-primary text-sm uppercase font-bold tracking-widest">{errorCode}</h3>
      <h1 className="text-secondary text-4xl font-bold">{title}</h1>
      <p className="text-gray-500 font-light">{description}</p>
      <button type="button" onClick={() => { navigate("/")}} className="flex space-x-2 items-center text-primary">
        <span>Go back home</span>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Error;
