import React from 'react'

import Chart from 'react-apexcharts'

const defaultProps = {
    options: {
        chart: {
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                columnWidth: 64,
                startingShape: 'flat',
                endingShape: 'flat',
                rangeBarOverlap: false
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Nov', 'Dez', 'Jan'],
            labels: {
                show: true
            }
        },
    },
    series: [
        {
            name: 'Transformador',
            data: [40, 10, 20]
        },
        {
            name: 'Evolutivo',
            data: [10, 30, 10]
        },
        {
            name: 'Não Evolutivo',
            data: [25, 15, 10]
        }
    ]
}

const Bar = () => <Chart type='bar' width={1000} height={500} {...defaultProps} />

export default Bar;