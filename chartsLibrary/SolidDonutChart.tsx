import "@carbon/charts/styles.css";
import { onMount } from "solid-js"
import { DonutChart } from "@carbon/charts";
import { ChartConfig, PieChartOptions } from "@carbon/charts/interfaces";

let divRef: HTMLDivElement = <div></div> as HTMLDivElement;

export default function SolidDonutChart(props: ChartConfig<PieChartOptions>) {

    onMount(() => {
        let newChartInstance = new DonutChart(divRef, props);
    });

    return <div ref={divRef} />;
}