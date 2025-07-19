// Views Over Time (Line Chart)
const viewsCtx = document.getElementById('viewsChart').getContext('2d');
const viewsChart = new Chart(viewsCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Views',
      data: [50000, 80000, 70000, 120000, 90000, 150000],
      borderColor: '#ff0000',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Views Over Time'
      }
    }
  }
});

// Top Videos (Bar Chart)
const topVideosCtx = document.getElementById('topVideosChart').getContext('2d');
const topVideosChart = new Chart(topVideosCtx, {
  type: 'bar',
  data: {
    labels: ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
    datasets: [{
      label: 'Views',
      data: [120000, 90000, 75000, 60000, 50000],
      backgroundColor: 'rgba(255, 99, 132, 0.7)'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top Videos by Views'
      }
    }
  }
});

// Traffic Sources (Doughnut Chart)
const trafficCtx = document.getElementById('trafficSourcesChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
  type: 'doughnut',
  data: {
    labels: ['YouTube Search', 'Suggested Videos', 'External', 'Direct'],
    datasets: [{
      data: [40, 30, 15, 15],
      backgroundColor: [
        '#ff0000',
        '#ff6b6b',
        '#ff9e9e',
        '#ffcdcd'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Traffic Sources'
      }
    }
  }
});

// Tab Switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    // TODO: Load different data based on tab
  });
});