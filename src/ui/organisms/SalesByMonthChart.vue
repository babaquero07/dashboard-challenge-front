<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

const chartRef = ref<ChartJS | null>(null);

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Ventas",
      data: [
        12000, 15000, 18000, 20000, 22000, 25000, 28000, 30000, 32000, 35000,
        38000, 40000,
      ],
      backgroundColor: "#4f46e5",
      borderColor: "#4f46e5",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <div class="w-full h-full">
    <Bar :data="chartData" :options="chartOptions" ref="chartRef" />
  </div>
</template>
