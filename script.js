// 初始化地图
const map = L.map('map').setView([20.5937, 78.9629], 2); // 地图中心点（印度附近），缩放等级为2

// 添加地图底图（使用 OpenStreetMap 的免费瓦片服务）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 定义标注点数据
const locations = [
  { lat: 39.9042, lng: 116.4074, title: "Beijing: Traditional Lantern" },
  { lat: 51.5074, lng: -0.1278, title: "London: Family Heirloom" },
  { lat: 40.7128, lng: -74.0060, title: "New York: Suitcase" },
  { lat: 35.6895, lng: 139.6917, title: "Tokyo: Vintage Kimono" }
];

// 添加标注点到地图
locations.forEach(location => {
  L.marker([location.lat, location.lng]).addTo(map)
    .bindPopup(`<b>${location.title}</b>`); // 点击标注点时弹出信息窗口
});