import React from 'react';
import {View} from "react-native";
import { BarChart, Grid, XAxis, LineChart } from 'react-native-svg-charts';


export default class BarChartExample extends React.PureComponent {

    render() {

        const fill = "#009aff"
        const data   = [ 50, 10, 40, 95 ]

        return (
          <View style={{ height: 200, padding: 20 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={ data }
                    gridMin={ 0 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: '#009aff', fill: "#009aff" }}
                >
                    <Grid/>
                </BarChart>
                <XAxis
                    data={ data }
                    formatLabel={ (value, index) => index + 1}
                    contentInset={{ left: 40, right: 40 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        )
    }

}
