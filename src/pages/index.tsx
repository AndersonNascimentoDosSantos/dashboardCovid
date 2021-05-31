/* eslint-disable no-use-before-define */
import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react'
import Pie from '../Grafics/Pie';
import Bar from '../Bar/Bar';


// endereco?: {
//   rua: String,
//   bairro: String,
//   cep: String,
//   cidade: String,
//   uf: String
// },
// contato: {
//   email: String,
//   whatsapp: String
// },
// Global: {
//   NewConfirmed: 185659,
//   TotalConfirmed: 167943710,
//   NewDeaths: 5743,
//   TotalDeaths: 3492105,
//   NewRecovered: 132341,
//   TotalRecovered: 105067538,
//   Date: "2021-05-27T06:06:02.975Z"  

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
    Countries:Array<Countries>
}
type Test ={
  Global:Global
}


export default function Home ({Global,sortedCountries}) {

if (!Global && !sortedCountries) {
  return {
    notFound: true,
  }
}
console.log(`dentro do index ${Global.Countries}`)
const newdate = format(parseISO(Global.Date),'dd MMM yyyy',{
  locale:ptBR
})
 return (
   <div>
     <div className="container">
       <div
         className="navbar navbar-inverse navbar-fixed-top"
         role="navigation"
       >
         <div className="navbar-collapse">
           <ul className="navbar-nav nav main-nav">
             <li>
               <a href="../index.html">Home</a>
             </li>
             <li>
               <a href="../country.html">País</a>
             </li>
             <li>
               <a href="#">Top 5</a>
             </li>
           </ul>
         </div>
       </div>
     </div>

     <div className="container grid grid-two-and-one">
       <div className="chart-wrapper">
         <div className="containerkpi wrapkpi">
           <section className="itemkpi">
             <h5>Total Confirmados</h5>
             <p id="confirmed">{Global.TotalConfirmed}</p>
           </section>
           <section className="itemkpi">
             <h5>Total Mortes</h5>
             <p id="death">{Global.TotalDeaths}</p>
           </section>
           <section className="itemkpi">
             <h5>Total Recuperados</h5>
             <p id="recovered">{Global.TotalRecovered}</p>
           </section>
         </div>
         <div className="chart-notes" id="date">
           Data de atualização:{newdate}
         </div>
       </div>
       <div className="chart-wrapper">
         <div className="chart-stage">
           <Pie Global={Global} />
           {/* <!--Adicionar grafico--> */}
         </div>
       </div>
       <div className="two">
         <div className="chart-wrapper">
           <div className="chart-stage">
             {/* <!--Adicionar grafico--&gt; */}
               <Bar sortedCountries={sortedCountries} />
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://api.covid19api.com/summary')

  const {Global}:Test = data
  const {Countries} = data

      const sortedCountries = Countries.sort(function (a, b) {
            if (a.TotalDeaths > b.TotalDeaths) {
              return -1;
            }
            if (a.TotalDeaths < b.TotalDeaths) {
              return 1;
            }
            // a must be equal to b
            return 0;
          }).slice(0,9).map(item=>{
              return [
                  item.Country,item.TotalDeaths
              ]
          })
  
  return {
    props: {
    Global,
    sortedCountries
    },
    revalidate: 60 * 15
  }
}
