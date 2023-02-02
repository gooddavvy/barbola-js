import { onMount } from "solid-js";
import "@carbon/charts/styles.css";
import { HistogramChart } from "@carbon/charts";
import { ChartConfig, HistogramChartOptions } from "@carbon/charts/interfaces";

var divRef: HTMLDivElement = (<div />) as HTMLDivElement;


export default function SolidHistogram(props: ChartConfig<HistogramChartOptions>) {
    onMount(() => {
        let newChartInstance = new HistogramChart(divRef, props);
    });
    return <div ref={divRef} />;
};

