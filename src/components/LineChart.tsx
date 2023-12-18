import { useEffect, useRef } from "react";
import * as d3 from "d3";

type DataPoint = {
  date: Date;
  value: number;
};

type LineChartProps = {
  data: DataPoint[];
};

// 定义组件和它的 props 类型
const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    // svg 範圍
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 400 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;

    // 清除 svg
    d3.select(svgRef.current).selectAll("*").remove();

    // svg
    const svg = d3
      .select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // x軸比例尺
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, width]);

    // y軸比例尺
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .range([height, 0]);

    // x軸
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // y軸
    svg.append("g").call(d3.axisLeft(y));

    // 折線
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.date))
      .y((d) => y(d.value));

    const path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", line);

    const pathNode = path.node();
    if (pathNode) {
      const totalLength = pathNode.getTotalLength();
      path
        .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .transition() // 動畫
        .duration(2000) // 動畫持續時間
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    }
  }, [data]);

  return <svg ref={svgRef} width={400} height={150}></svg>;
};

export default LineChart;
