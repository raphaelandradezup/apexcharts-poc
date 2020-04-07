import React from 'react'

import Chart from 'react-apexcharts'

const defaultProps = {
    options: {
        labels: ['Transformador', 'Evolutivo rápido', 'Evolutivo lento', 'Não evolutivo', 'Não sei avaliar'],
        stroke: {
            width: 3
        },
        dataLabels: {
            formatter: (val) => `${val}%`
        },
        states: {
            active: {
                filter: 'none',
                value: 0.0
            }
        },
        legend: {
            position: 'right',
            floating: true
        }
    },
    series: [4, 0, 1, 2, 3]
}

const Donut = () => (<Chart
    type="donut"
    height={300}
    {...defaultProps}
/>)

export default Donut