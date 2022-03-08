import { PieChart } from 'react-minimal-pie-chart';

const ProgressBar = () => {
    return (
<PieChart
  data={[
    { title: 'Red', value: 10, color: '#D2222D' },
    { title: 'Amber', value: 15, color: '#FFBF00' },
    { title: 'Green', value: 20, color: '#238823' },
  ]}
/>

    )

}

export default ProgressBar;