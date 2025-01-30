import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { useGlobalState } from "../store";
import { Fuel } from "lucide-react";

const GasPrice = () => {
  const chainId = process.env.CHAIN_ID || "10";
  const Auth = Buffer.from(process.env.REACT_APP_INFURA_AUTH).toString(
    "base64"
  );
  const [openBox] = useGlobalState("openBox");
  const [gasFees, setGasFees] = useState({
    min: null,
    medium: null,
    max: null
  });
  const getGasPrice = async () => {
    try {
      const { data } = await axios.get(
        `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
        {
          headers: {
            Authorization: `Basic ${Auth}`
          }
        }
      );
      const { low, medium, high } = data;
      setGasFees({
        min: low.suggestedMaxFeePerGas,
        medium: medium.suggestedMaxFeePerGas,
        max: high.suggestedMaxFeePerGas
      });
    } catch (error) {
      console.error(
        "Server responded with:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    getGasPrice();
  }, []);
  return (
    <>
      <div className={openBox ? "opacity-50" : "opacity-100"}>
        <div className="my-7 mx-4 flex items-center gap-2 mb-5 pb-5 dark:text-gray-300 lg:mb-0">
          <div className="flex items-center gap-1 px-2 py-1 text-sm text-indigo-600">
            <Fuel /> Min: {gasFees.min} Gwei
          </div>
          <div className="flex items-center gap-1 px-2 py-1 text-sm text-indigo-600">
            <Fuel /> Medium: {gasFees.medium} Gwei
          </div>
          <div className="flex items-center gap-1 px-2 py-1 text-sm text-indigo-600">
            <Fuel /> Max: {gasFees.max} Gwei
          </div>
        </div>
      </div>
    </>
  );
};

export default GasPrice;
