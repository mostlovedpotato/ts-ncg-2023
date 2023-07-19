import axios from 'axios';

const CHARTS_BASE_URL = 'http://localhost:8080/api/v1/view';

class ChartServices {
    getAllCharts () {
        return axios.get(CHARTS_BASE_URL)
    }

    createChart (chart) {
        return axios.post(CHARTS_BASE_URL, chart);
    }
}
export default new ChartServices()