import React from 'react'

import Chart from 'react-apexcharts'

const defaultProps = {
    options: {
        chart: {
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                columnWidth: "20%"
            }
        }
    },
    series: [
        {
            name: 'Transformador',
            data: [40, 10, 20]
        },
        {
            name: 'Evolutivo',
            data: [10, 30, 10]
        }
    ]
}

const Bar = () => <Chart type='bar' height={500} {...defaultProps} />

export default Bar;