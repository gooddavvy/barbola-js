import { onMount } from "solid-js";
import "@carbon/charts/styles.css";
import { PieChart } from "@carbon/charts";
import { ChartConfig, PieChartOptions } from "@carbon/charts/interfaces";

var divRef: HTMLDivElement = (<div />) as HTMLDivElement;


export default function SolidPieChart(props: ChartConfig<PieChartOptions>) {
    onMount(() => {
        let newChartInstance = new PieChart(divRef, props);
    });
    return <div ref={divRef} />;
};

