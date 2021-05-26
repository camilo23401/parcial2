import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { FormattedMessage } from "react-intl";

export const PieChart = props => {
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value(d => d[1])
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");

  useEffect(
    () => {
      const data = createPie(props.data);
      const group = d3.select(ref.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors(i));

      const text = groupWithUpdate
        .append("svg:title")
        .text(function(d) {
          const rta = d.data[0]+": "+d.value+"KwH";
          return rta; })

      text
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("transform", d => `translate(${createArc.centroid(d)})`)
        .style("fill", "white")
        .style("font-size", 10)
      
      
    },
    [props.data]
  );

  

  return (
    <>
    <p><FormattedMessage id="power"/></p>
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
    </>
  );
};