import { Chart } from "react-google-charts";
type Countries = {
    ID: string,
Country: string,
CountryCode: string,
Slug: string,
NewConfirmed: number,
TotalConfirmed: number,
NewDeaths: number,
TotalDeaths: number,
NewRecovered: number,
TotalRecovered: number,
Date: string,
Premium: { },

}
type Global = {
 
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string  
    Countries:Countries[]
}

export default function Bar({sortedCountries}){
   
    // console.log(`countries in barChart ${sortedCountries}`)
    
    return (
      <Chart
        width={"100%"}
        height={"250px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[["Countries", "Deaths"], ...sortedCountries]}
        options={{
          // Material design options
          chart: {
            title: "Total de mortes por pais - top 10",
          },
        }}
      />
    );
}