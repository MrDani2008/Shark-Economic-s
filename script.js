document.addEventListener('DOMContentLoaded', () => {
    if (typeof Chart !== 'undefined') {
        // =========================
        // Gráfica de pastel (div1)
        // =========================
        const pieCanvas = document.getElementById('pieChart');
        if (pieCanvas) {
            const pieCtx = pieCanvas.getContext('2d');
            if (pieCtx) {
                const pieValues = [5, 6, 9];
                const pieLabels = ['Bienes', 'Servicios', 'Comercio Sur-Sur(excluyendo china)'];
                const pieColors = ['#1603f4', '#db0000', '#00b894'];

                new Chart(pieCtx, {
                    type: 'pie',
                    data: {
                        labels: pieLabels,
                        datasets: [{
                            data: pieValues,
                            backgroundColor: pieColors,
                            borderColor: '#000',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Crecimiento en valor del comercio',
                                
                                font: {
                                    size: 16,
                                    weight: 'bold'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 15,
                                    boxHeight: 15,
                                    usePointStyle: true
                                }
                            }
                        }
                    }
                });
            }
        }

        // =========================
        // Gráfica de dona (div2)
        // =========================
        const donutCanvas = document.getElementById('DonutChart');
        if (donutCanvas) {
            const donutCtx = donutCanvas.getContext('2d');
            if (donutCtx) {
                const donutValues = [50, 30];
                const donutLabels = ['Volatilidad Maxima', 'Volatilidad Minima'];
                const donutColors = ['#ff9800', '#3f51b5'];

                new Chart(donutCtx, {
                    type: 'doughnut',
                    data: {
                        labels: donutLabels,
                        datasets: [{
                            data: donutValues,
                            backgroundColor: donutColors,
                            borderColor: '#000',
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '60%',
                        plugins: {
                            title: {
                                display: true,
                                text: 'Comparación de Rango de Volatidad en PVD',
                                
                                font: {
                                    size: 16,
                                    weight: 'bold'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 15,
                                    boxHeight: 15,
                                    usePointStyle: true
                                }
                            }
                        }
                    }
                });
            }
        }

        // =========================
        // Gráfica de líneas (div3) - Merchandise trade volume
        // =========================
        const lineCanvas = document.getElementById('lineChart');
        if (lineCanvas) {
            const lineCtx = lineCanvas.getContext('2d');
            if (lineCtx) {
                const lineLabels = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
                
                // Datos históricos (2019-2024) - línea azul sólida
                const historicalData = [100, 95, 103, 105.5, 104.5, 107.5];
                
                // Pronóstico base (2024-2026) - línea punteada naranja
                const baselineData = [null, null, null, null, null, 107.5, 110.5, 113.5];
                
                // Pronóstico ajustado (2024-2026) - línea sólida verde
                const adjustedData = [null, null, null, null, null, 107.5, 107.5, 110];

                new Chart(lineCtx, {
                    type: 'line',
                    data: {
                        labels: lineLabels,
                        datasets: [
                            {
                                label: 'Datos históricos',
                                data: historicalData,
                                borderColor: '#1976D2', // Azul oscuro sólido
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                fill: false,
                                tension: 0.1,
                                pointRadius: 4,
                                pointHoverRadius: 6
                            },
                            {
                                label: 'Pronóstico base',
                                data: baselineData,
                                borderColor: '#FF9800', // Naranja
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderDash: [5, 5], // Línea punteada
                                fill: false,
                                tension: 0.1,
                                pointRadius: 4,
                                pointHoverRadius: 6
                            },
                            {
                                label: 'Pronóstico ajustado',
                                data: adjustedData,
                                borderColor: '#4CAF50', // Verde
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                fill: false,
                                tension: 0.1,
                                pointRadius: 4,
                                pointHoverRadius: 6
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Volumen del comercio de mercancías',
                                
                                font: {
                                    size: 16,
                                    weight: 'bold'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 20
                                }
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    boxWidth: 15,
                                    boxHeight: 15,
                                    usePointStyle: true
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const value = context.raw;
                                        if (value === null) return '';
                                        return context.dataset.label + ': ' + value.toFixed(1);
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: 'Index, 2019=100'
                                    
                                },
                                ticks: {
                                    stepSize: 5
                                },
                                min: 90,
                                max: 120
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Año'
                                }
                            }
                        }
                    }
                });
            }
        }

        // =========================
        // Gráfica de PIB (div4) - GDP at market exchange rates
        // =========================
        const gdpCanvas = document.getElementById('GDPChart');
        if (gdpCanvas) {
            const gdpCtx = gdpCanvas.getContext('2d');
            if (gdpCtx) {
                const gdpLabels = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];

                // Datos: históricos (2019-2024) y proyecciones (2025-2026)
                // Para 2025 y 2026 hay dos proyecciones, usaremos la primera como principal
                const gdpData = [2.7, -2.9, 6.4, 3.3, 2.8, 2.8];

                // Colores: azul para históricos, naranja para primera proyección
                const gdpColors = ['#2196F3', '#2196F3', '#2196F3', '#2196F3', '#2196F3', '#2196F3', '#FF9800', '#FF9800'];

                new Chart(gdpCtx, {
                    type: 'bar',
                    data: {
                        labels: gdpLabels,
                        datasets: [
                            {
                                label: 'Datos históricos',
                                data: gdpData,
                                backgroundColor: gdpColors,
                                borderColor: '#000',
                                borderWidth: 1,
                                borderRadius: 2
                            },
                            {
                                label: 'Pronóstico base',
                                data: [null, null, null, null, null, null, 2.8, 2.6],
                                backgroundColor: ['#FF9800', '#FF9800'],
                                borderColor: '#000',
                                borderWidth: 1,
                                borderRadius: 2
                            },
                            {
                                label: 'pronóstico ajustado',
                                data: [null, null, null, null, null, null, 2.2, 2.4],
                                backgroundColor: ['#4CAF50', '#4CAF50'],
                                borderColor: '#000',
                                borderWidth: 1,
                                borderRadius: 2
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'PIB a tipos de cambio de mercado',
                                font: {
                                    size: 16,
                                    weight: 'bold'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 20
                                }
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    boxWidth: 15,
                                    boxHeight: 15,
                                    usePointStyle: true
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const value = context.raw;
                                        if (value === null) return '';
                                        return context.dataset.label + ': ' + value + '%';
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: 'cambio de % anual'
                                },
                                ticks: {
                                    callback: function (value) {
                                        return value + '%';
                                    },
                                    stepSize: 2
                                },
                                min: -4,
                                max: 8
                            },
                            x: {
                                stacked: false
                            }
                        }
                    }
                });
            }
        }
    }

    // Agregar interactividad a los botones (con comprobaciones por si no existen)
    const btnRegister = document.querySelector('.btn-register');
    if (btnRegister) {
        btnRegister.addEventListener('click', function () {
            alert('Funcionalidad de registro - Próximamente');
        });
    }

    const btnLogin = document.querySelector('.btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', function () {
            alert('Funcionalidad de inicio de sesión - Próximamente');
        });
    }

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});