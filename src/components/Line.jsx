import React from 'react'

import Chart from 'react-apexcharts'

const defaultProps = {
    options: {
        labels: ['Transformador'],
        markers: {
            size: 5
        },
        chart: {
            toolbar: { show: false }
        }
    },
    series: [{
        name: 'Transformador',
        data: [
            { x: '', y: null },
            { x: '2019 Nov', y: 100 },
            { x: '2019 Dez', y: 120 },
            { x: '2020 Jan', y: 90 },
            { x: '', y: null }
        ]
    }]
}

const Line = () => (<Chart type="line" {...defaultProps} height={300} />)

export default Line;