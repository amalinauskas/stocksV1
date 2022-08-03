import React, { useContext, useEffect, useState } from "react";
// import { mockHistoricalData } from "../../constants/mock";
import {
  convertUnixTimestampToDate,
  createDate,
  convertDateToUnixTimestamp,
} from "../../helpers/date-helper";
import * as S from "./Chart.styles";
// import Card from "../Card/Card";
import { chartConfig } from "../../constants/config";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import ChartFIlter from "../ChartFilter/ChartFIlter";
import { fetchHistoricalData } from "../../api/stock-api";
import StockContext from "../../context/StockContext";

const Chart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");

  const { stockSymbol } = useContext(StockContext);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        data: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <S.Chart>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#colorUv)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="chartDiv">
        <ul>
          {Object.keys(chartConfig).map((item) => {
            return (
              <li key={item}>
                <ChartFIlter
                  text={item}
                  onClick={() => {
                    setFilter(item);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </S.Chart>
  );
};

export default Chart;
