import { useState, useEffect } from "react";
// import { useQuery } from "@apollo/client";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from 'react-apexcharts';
import Flatpickr from 'react-flatpickr';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { Calendar } from 'react-feather';
// import moment from "moment";
// import { GET_HOURLY_REPORT } from "../../../apolo/graphql/Report";
// import { ALARM_BY_DAY } from "../../../apolo/graphql/AlarmAI";
import Alert from "../../../constants/AlertScriptTypeConstants"

const HourlyReport = () => {
    const [date, setDate] = useState(new Date());

    const offset = Math.floor(new Date().getTimezoneOffset() / 60);
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    const timeZoneOffset = `${offset < 0 ? `+` : `-`}${zeroPad(Math.abs(offset), 2)}:00`

    // test

    // Chuyển đổi dữ liệu thành chuỗi chứa ký tự Type_number

    function initHours() {
        let data = [];
        for (let index = 0; index < 24; index++) {
            let tmp = {
                Time: `${zeroPad(index, 2)}:00`,
                In: 0,
                Out: 0,
                Bothway: 0
            }
            data.push(tmp);
        }
        return data;
    }

    function initHoursAlarm() {
        let data = []
        for(let index = 0; index<20;index++){
            data.push(index);
        }
        let dataAlarm = [];
        const convertedData = data.map(number => Alert.AlertType[number]);
        
        for (let index = 0; index < 24; index++) {
            let tmp = {
                Time: `${zeroPad(index, 2)}:00`,
            }
            for(let i=0; i<convertedData.length;i++){
                tmp[convertedData[i]] = 0
            }
            dataAlarm.push(tmp);
        }
        // console.log(dataAlarm)
        return dataAlarm;
    }
    

    const test ={
        "data": {
            "getCoreAlarmByDay": [
                {
                    "count": "3",
                    "type": "16",
                    "time": "2023-11-10T02:00:00+00:00",
                },
                {
                    "count": "378",
                    "type": "18",
                    "time": "2023-11-01T02:00:00+00:00",
                },
                {
                    "count": "62",
                    "type": "16",
                    "time": "2023-11-01T03:00:00+00:00",
                },
                {
                    "count": "8",
                    "type": "16",
                    "time": "2023-11-01T04:00:00+00:00",
                },
                {
                    "count": "23",
                    "type": "16",
                    "time": "2023-11-01T05:00:00+00:00",
                },
                {
                    "count": "19",
                    "type": "16",
                    "time": "2023-11-01T06:00:00+00:00",
                },
                {
                    "count": "4",
                    "type": "17",
                    "time": "2023-11-01T06:00:00+00:00",
                },
                {
                    "count": "34",
                    "type": "16",
                    "time": "2023-11-01T07:00:00+00:00",
                },
                {
                    "count": "20",
                    "type": "16",
                    "time": "2023-11-01T08:00:00+00:00",
                }
            ]
        }
    }

    const typeData = [...new Set(test.data.getCoreAlarmByDay.map(number => number.type))].map(number => Alert.AlertType[number])


    // const hours = initHoursAlarm();
    // console.log(hours)

    // const [hourlyRecord, setHourlyRecord] = useState(initHours());
    const [hourlyAlarm, setHourAlarm] = useState(initHoursAlarm());

    // const hourly = useQuery(ALARM_BY_DAY, {
    //     variables: {
    //         day: new Date(moment(date).format(`YYYY-MM-DD`)).toISOString(),
    //         timeZoneOffset: timeZoneOffset
    //     },
    //     fetchPolicy: "no-cache"
    // })

    


    useEffect(() => {
        // if (test.loading) return;
        // if (!test.data) return;
        // if (!test.data.getUserReportByHour) return;
        // if (test.data.getUserReportByHour.length == 0) return;
        let tmpHourState = initHoursAlarm();
        // console.log(tmpHourState);
        for (let index = 0; index < test?.data?.getCoreAlarmByDay?.length; index++) {
            const hourData = test?.data?.getCoreAlarmByDay[index];
            const time = new Date(hourData.time)
            const hours = time.getUTCHours()
            // console.log(hours);
            const t = Alert.AlertType[hourData.type]
            tmpHourState[hours][t] = hourData.count;
        }
        setHourAlarm(tmpHourState);
    }, []);


    // useEffect(() => {
    //     setHourlyRecord(initHours())
    //     hourly.refetch()
    // }, [date]);

    const areaColors = {
        series1: '#A7A5D7',
        series2: '#B4DFC4',
        series3: '#FFDD9A',
        series4: '#00CCFF',
        series5: '#FFCCFF',
        series6: '#CC9999',
        series7: '#FF6666',
        series8: '#CC6666',
        series9: '#336699',
        series10: '#CC33CC',
        series11: '#339933',
        series12: '#999900',
        series13: '#FFCCCC',
        series14: '#CCFFFF',
        series15: '#00FFFF',
        series16: '#FF99CC',
        series17: '#6666FF',
        series18: '#CC6699',
        series19: '#FFCC00',
    }

    const colorType = [];

    for(let index=1;index<20;index++){
        colorType.push(areaColors[`series${index}`])
    }


    

    // ** Chart Options
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'straight'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },

        // colors: [areaColors.series1, areaColors.series2, areaColors.series3, areaColors.series4, areaColors.series5, areaColors.series6, areaColors.series7],
        colors: colorType,
        xaxis: {
            categories: hourlyAlarm.map((item) => item.Time),
            tooltip: {
                shared: false,
                enabled: true,
                formatter:(val, opts) =>{
                    let day = "fri";
                    return `${opts}`;
                }
            }
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        yaxis: {
            opposite: 'rtl'
        }
    }


    const arrayOfObjects = typeData.map(type => ({
        name: type,
        data: hourlyAlarm.map((item) => item[type])
      }));

    return (
        <Card>
            <CardHeader className='d-flex justify-content-end'>
                <div className='d-flex align-items-center mt-md-0'>
                    <Calendar size={25} />
                    <Flatpickr
                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                        options={{
                            dateFormat: 'd-m-Y',
                            defaultDate: date,
                        }}
                        value={date}
                        onChange={
                            (date) => {
                                setDate(date[0])
                            }
                        }
                    />
                </div>
            </CardHeader>
            <CardBody>
                <Chart
                    options={options}
                    series={arrayOfObjects}
                    type='area'
                    height={300}
                />
            </CardBody>
        </Card>
    )
};

export default HourlyReport;