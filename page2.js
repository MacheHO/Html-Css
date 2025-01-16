//chart2
const ctx = document.getElementById('Chart2').getContext('2d')
let chart = new Chart(ctx,{
    type: 'pie',
    data:{
        labels:['R', 'G', 'B', 'A'],
        datasets:[{
            label: 'My First Dataset',
            data: [30, 50, 10,45],
            backgroundColor:[
                'rgbs(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 205, 86)',
                'rgba(57, 265, 173'
            ],
            hoverOffset:5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        aspectRatio: 1
    }
});
//chart
const bar = document.getElementById('Chart').getContext('2d')
let chart3 = new Chart(bar,{
    type: 'bar',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets:[{
            label: 'test',
            data:[12, 19, 3, 5, 1, 3, 20],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(83, 162, 25, 0.2)'
            ]
        }],
    }
});
//chart3
const line = document.getElementById('Chart3').getContext('2d')
let chart2 = new Chart(line,{
    type: 'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets:[{
            label: ['平均溫度'],
            data: [20, 22.3, 25, 26, 28, 31.2, 33],
            fill:false,
            borderColor:'rgb(75, 192, 192)',
        },{
            label: ['平均濕度'], 
            data: [55, 42.6, 88, 75.5, 52, 85, 46],
            fill:false,
            borderColor:'red',
        }]
    }
});
//chart4
const radar = document.getElementById('Chart4').getContext('2d')
let chart4 = new Chart(radar,{
    type: 'radar',
    data:{
        labels: ['攻擊', '防禦', '智力', '精神', '敏捷', '生命'],       //注意字尾有s
        datasets: [{
               label: "小明",
               backgroundColor: "rgba(255,0,0,0.8)",   //圖形紅色，稍微半透明
               borderColor: "rgba(255,0,0,1)",                //邊框紅色，不透明
               pointBackgroundColor: "rgba(255,255,255,1)",  //座標點的顏色，白色
               pointBorderColor: "rgba(0,0,0,0.3)",                 //座標點的邊框顏色，黑色透明
               pointHoverBackgroundColor: "#6666ff",          //滑鼠經過時座標點的顏色，青色
               pointHoverBorderColor: "rgba(0,0,0,0.3)",      //滑鼠經過時座標點的邊框顏色，黑色透明
               pointBorderWidth: 1,       //座標點的邊框粗細
               pointRadius: 3,                //座標點的半徑
               pointHoverRadius: 5,      //滑鼠經過時座標點的半徑，動態變大
               pointStyle: 'circle',           //座標點的圖形樣式，詳見*註1
               hidden: true,       //預設要不要隱藏，下面有控制開關顯示的方法
               data: [70,90,50,30,80,50]
               },{      //第二個腳色用另一個{ }來新增
               label: "小華",
               backgroundColor: "rgba(0,0,255,0.8)",
               borderColor: "rgba(0,0,255,1)",
               pointBackgroundColor: "rgba(255,255,255,1)",
               pointBorderColor: "rgba(0,0,0,0.3)",
               pointHoverBackgroundColor: "#6666ff",
               pointHoverBorderColor: "rgba(0,0,0,0.3)",
               pointBorderWidth: 1,
               pointRadius: 3,
               pointHoverRadius: 5,
               pointStyle: 'circle',
               data: [40,40,85,75,60,70]
               }],
    }
});