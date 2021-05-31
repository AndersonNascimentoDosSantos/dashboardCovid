import { Chart } from "react-google-charts";

export default function Pie(props){

    return (
      <Chart
        width={"100px"}
        height={"50px"}
        chartType="PieChart"
        loader={<div>Carregando dados</div>}
        data={[
          ["status", "new cases"],
          ["Confirmed", props.Global.NewConfirmed],
          ["Deaths", props.Global.NewDeaths],
          ["Recovered", props.Global.NewRecovered],
        ]}
        options={{
          title: "Distribuição de Novos Casos",
        }}
      />
    );
}