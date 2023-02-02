import { onMount } from "solid-js";
import "@carbon/charts/styles.css";
import { GaugeChart } from "@carbon/charts";
import { ChartConfig, PieChartOptions } from "@carbon/charts/interfaces";

var divRef: HTMLDivElement = (<div />) as HTMLDivElement;


export default function SolidGaugeChart(props: ChartConfig<PieChartOptions>) {
    onMount(() => {
        let newChartInstance = new GaugeChart(divRef, props);
    });
    return <div ref={divRef} />;
};

