import { useState, useEffect } from "react";
import Select from 'react-select';
import { selectThemeColors } from '@utils';
import { useQuery } from "@apollo/client";
import { Card, CardBody, CardHeader, Col, Label } from "reactstrap";
import moment from "moment"
import Chart from 'react-apexcharts';
import { Line } from "react-chartjs-2";
import Flatpickr from 'react-flatpickr';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import { Calendar } from 'react-feather';
import Alert from "../../../constants/AlertScriptTypeConstants"
import { CORE_ALARM_DEVICE_CAMERA_ID } from "../../../apolo/graphql/Alarm";
import { ALl_ALARM_CAMERA } from "../../../apolo/graphql/Alarm";
import { ALl_ALARM_DEIVCE } from "../../../apolo/graphql/Alarm";


const DailyReport = () => {

    //#region daily report
    const [month, setMonth] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date(2023,11,1,0,0,0));
    const [endDate, setEndDate] = useState(new Date(2023,11,30,0,0,0));
    const [searchDeviceId, setSearchDeviceId] = useState([])
    const [searchCameraId, setSearchCameraId] = useState([])
    const offset = Math.floor(new Date().getTimezoneOffset() / 60);
    const [typeAlarm, setTypeAlarm] = useState([]);
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const timeZoneOffset = `${offset < 0 ? `+` : `-`}${zeroPad(Math.abs(offset), 2)}:00`;

    const [dataReport, setDataReport] = useState([]);
    const [dataReportAlarm, setDataReportAlarm] = useState([]);
    const [dayAlarm, setDayAlarm] = useState([])

    const dailyAlarm = useQuery(CORE_ALARM_DEVICE_CAMERA_ID, {
        variables: {
            startDate: new Date(moment(startDate).format(`YYYY-MM-DD`)).toISOString(),
            endDate: new Date(moment(endDate).format(`YYYY-MM-DD`)).toISOString(),
            cameraIds: searchCameraId,
            deviceIds: searchDeviceId
        },
        fetchPolicy: "no-cache"
    })
    console.log(dailyAlarm);


    const allCameraId = useQuery(ALl_ALARM_CAMERA, {
        variables: {
            startDate: new Date(moment(startDate).format(`YYYY-MM-DD`)).toISOString(),
            endDate: new Date(moment(endDate).format(`YYYY-MM-DD`)).toISOString()
        },
        fetchPolicy: "no-cache"
    })
    console.log(allCameraId);

    const allDeviceId = useQuery(ALl_ALARM_CAMERA, {
        variables: {
            startDate: new Date(moment(startDate).format(`YYYY-MM-DD`)).toISOString(),
            endDate: new Date(moment(endDate).format(`YYYY-MM-DD`)).toISOString()
        },
        fetchPolicy: "no-cache"
    })
    console.log(allDeviceId);

    // useEffect(() => {
    //     const today = new Date();
    //     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    //     const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    //     if (endOfMonth < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0)) {
    //         setStartDate(startOfMonth);
    //         setEndDate(endOfMonth);
    //     } else {
    //         setStartDate(new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0)));
    //         setEndDate(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59));
    //     }

    // }, [])



    const daysArray = [];
    for (let currentDate = new Date(startDate); currentDate <= new Date(endDate); currentDate.setDate(currentDate.getDate() + 1)) {
        // Chuyển định dạng ngày thành 'DD/MM'
        const dayMonthFormat = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;

        daysArray.push(dayMonthFormat);
    }




    function initDaysAlarm() {
        let data = []
        for (let index = 0; index < 20; index++) {
            data.push(index);
        }
        let dataAlarm = [];
        const convertedData = data.map(number => Alert.AlertType[number]);

        for (let index = 0; index < daysArray.length; index++) {
            let tmp = {
                Time: daysArray[index],
                DeviceId: "",
                CameraId: ""
            }
            for (let i = 0; i < convertedData.length; i++) {
                tmp[convertedData[i]] = 0
            }
            dataAlarm.push(tmp);
        }

        return dataAlarm;
    }

    const test2 = {
        "data": {
            "getCoreAlarmByMonth": [
                {
                    "count": "100",
                    "type": "16",
                    "time": "2023-11-01T00:00:00+00:00",
                    "cameraId": "ADKHRH237",
                    "deviceId": "DJHKHAE123"
                },
                {
                    "count": "200",
                    "type": "10",
                    "time": "2023-11-02T00:00:00+00:00",
                    "cameraId": "ADKHRH237SAD",
                    "deviceId": "DJHKHAE123"
                },
                {
                    "count": "378",
                    "type": "18",
                    "time": "2023-11-03T00:00:00+00:00",
                    "cameraId": "ADKGFHRH237213214",
                    "deviceId": "DJHKHAE123"
                },
                {
                    "count": "62",
                    "type": "14",
                    "time": "2023-11-01T00:00:00+00:00",
                    "cameraId": "AQWEERTEH237",
                    "deviceId": "DADSGFSDFE123"
                },
                {
                    "count": "8",
                    "type": "13",
                    "time": "2023-11-01T00:00+00:00",
                    "cameraId": "AEKWLRJLWEKJR237",
                    "deviceId": "1231243DSFSD123"
                },
                {
                    "count": "23",
                    "type": "16",
                    "time": "2023-11-09T00:00:00+00:00",
                    "cameraId": "QWEWQR31237",
                    "deviceId": "LKJQKLJ123"
                },
                {
                    "count": "19",
                    "type": "16",
                    "time": "2023-11-10T00:00:00+00:00",
                    "cameraId": "QWEKJLKJ237",
                    "deviceId": "SDSDF123"
                },
                {
                    "count": "4",
                    "type": "17",
                    "time": "2023-11-11T00:00:00+00:00",
                    "cameraId": "KJSALKJD237",
                    "deviceId": "SLKJDSLKJ123"
                },
                {
                    "count": "34",
                    "type": "16",
                    "time": "2023-11-12T00:00:00+00:00",
                    "cameraId": "SDKHJKFD237",
                    "deviceId": "SADLKJKLSJ123"
                },
                {
                    "count": "20",
                    "type": "16",
                    "time": "2023-11-13T00:00:00+00:00",
                    "cameraId": "DSFKJMNVCKXJV237",
                    "deviceId": "DSFJKHEKJRH123"
                }
            ]
        }
    }


    const DeviceId = {
        "data": {
            "getCoreAlarmByMonth": ["DJHKHAE123", "DJHKHAE123", "DADSGFSDFE123", "1231243DSFSD123", "LKJQKLJ123", "SDSDF123"]
        }
    }

    const CameraId = {
        "data": {
            "getCoreAlarmByMonth": ["ADKHRH237", "ADKHRH237SAD", "ADKGFHRH237213214", "AQWEERTEH237", "QWEKJLKJ237", "DSFKJMNVCKXJV237"]
        }
    }
    


    useEffect(() => {
        // if (test.loading) return;
        // if (!test.data) return;
        // if (!test.data.getUserReportByHour) return;
        // if (test.data.getUserReportByHour.length == 0) return;
        let tmpDayState = initDaysAlarm();
        let dataSearch = [];
        for (let index = 0; index < test2?.data?.getCoreAlarmByMonth?.length; index++) {
            const dayData = test2?.data?.getCoreAlarmByMonth[index];
            for(let i = 0;i < searchDeviceId.length;i++ ){
                if(dayData.deviceId === searchDeviceId[i]){
                    dataSearch.push(dayData)
                }
            }
        }
        setTypeAlarm([...new Set(dataSearch.map(number => number.type))].map(number => Alert.AlertType[number]))
        if(dataSearch.length === 0){
            dataSearch = test2?.data?.getCoreAlarmByMonth
            setTypeAlarm([...new Set(test2.data.getCoreAlarmByMonth.map(number => number.type))].map(number => Alert.AlertType[number]))
        }
        for (let index = 0; index < dataSearch.length; index++) {
            const data = dataSearch[index];
            const day = new Date(data.time);
            const t = Alert.AlertType[data.type]
            tmpDayState[day.getDate() - 1][t] = data.count;
            tmpDayState[day.getDate() - 1].CameraId = data.cameraId;
            tmpDayState[day.getDate() - 1].DeviceId = data.deviceId;
    }
        setDayAlarm(tmpDayState);
    }, [searchDeviceId]);


    // useEffect(() => {
    //     if (dailyAlarm.loading) return;
    //     if (!dailyAlarm.data) return;
    //     setDataReportAlarm(dailyAlarm.data.getCoreAlarmByMonth)
    // }, [dailyAlarm])
    //#endregion

    const columnColors = {
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

    for (let index = 1; index < 20; index++) {
        colorType.push(columnColors[`series${index}`])
    }

    // ** Chart Options
    const options = {
        chart: {
            height: 400,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                colors: {
                    // backgroundBarColors: [columnColors.bg],
                    backgroundBarRadius: 10
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        colors: colorType,
        stroke: {
            show: true,
            colors: ['transparent']
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        xaxis: {
            // categories: dataReport.map((item) => {
            //     return moment(item.day).format(`DD/MM`)
            // }),
            categories: daysArray,
            tooltip: {
                shared: false,
                enabled: true,
                style: {
                    backgroundColor: '#fff', // Màu nền cho tooltip
                    fontSize: '30px',
                    width: '100%',
                  },
                formatter: (val, opts) => {
                    const parts = val.split('/');
                    const day = parts[0];
                    const type = [...new Set(test2.data.getCoreAlarmByMonth.map(number => number.type))][opts.seriesIndex];
                    for (let index = 0; index < test2.data.getCoreAlarmByMonth.length; index++) {
                        const timeIndex = new Date(test2.data.getCoreAlarmByMonth[index].time)
                        const timeDayIndex = String(timeIndex.getDate()).padStart(2, '0');
                        console.log(timeDayIndex)
                        console.log(day);
                        if (timeDayIndex === day && test2.data.getCoreAlarmByMonth[index].type === type) {
                            console.log(test2.data.getCoreAlarmByMonth[index].deviceId);
                            console.log(test2.data.getCoreAlarmByMonth[index].cameraId);
                            return (
                                '<div>DeviceId: ' + test2.data.getCoreAlarmByMonth[index].deviceId + '</div>' +
                                '<div>CameraId: ' + test2.data.getCoreAlarmByMonth[index].cameraId + '</div>'
                            )
                        }
                    }
                },
            }
        },
        fill: {
            opacity: 1
        },
        yaxis: {
            opposite: 'rtl'
        }
    }

    // ** Chart Series
    // const series = [
    //     {
    //         name: 'In',s
    //         // data: dataReport.map((item) => item.totalCheckIn),
    //         data: []
    //     },
    //     {
    //         name: 'Out',
    //         // data: dataReport.map((item) => item.totalCheckOut),
    //         data: []

    //     },
    //     {
    //         name: 'Bothway',
    //         // data: dataReport.map((item) => item.totalUndefine),
    //         data: []

    //     }
    // ]
    const arrayOfObjects = typeAlarm.map(type => ({
        name: type,
        data: dayAlarm.map((item) => item[type])
    }));


    // console.log(DeviceId.data.getCoreAlarmByMonth.map(el => el));
    // console.log(searchDeviceId);
    return (
        <Card>
            <CardHeader className='d-flex'>
                <div className='d-flex justify-content-start align-items-center mt-md-0'>
                    <Label for='multiSelectCom'>Device</Label>
                    <Select
                        id="multiSelectCom"
                        instanceId="multiSelectCom"
                        className='react-select'
                        classNamePrefix='select'
                        theme={selectThemeColors}
                        isClearable={false}
                        isMulti={true}
                        options={DeviceId.data.getCoreAlarmByMonth.map(el => {
                            return {
                                value: el,
                                label: el
                            }
                        })}
                        onChange={(company) => {
                            if (company !== null && company !== undefined) {
                                setSearchDeviceId(company.map(el => el.value))
                            }
                        }}  
                    />
                </div>

                <div className='d-flex justify-content-start align-items-center mt-md-0'>
                    <Label for='multiSelectCom'>Camera</Label>
                    <Select
                        id="multiSelectCom"
                        instanceId="multiSelectCom"
                        className='react-select'
                        classNamePrefix='select'
                        theme={selectThemeColors}
                        isClearable={false}
                        isMulti={true}
                        options={CameraId.data.getCoreAlarmByMonth.map(el => {
                            return {
                                value: el,
                                label: el
                            }
                        })}
                        onChange={(company) => {
                            if (company !== null && company !== undefined) {
                                setSearchCameraId(company.map(el => el.value))
                            }
                        }}  
                    />
                </div>
                <div className='d-flex align-items-center mt-md-0'>
                    <Calendar size={25} />
                    <Flatpickr
                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                        value={[startDate, endDate]}
                        options={{
                            mode: 'range',
                            dateFormat: 'd/m/Y',
                        }}
                        onChange={(selectedDates) => {
                            if(selectedDates[0]<selectedDates[1]){
                                setStartDate(selectedDates[0])
                                setEndDate(selectedDates[1])
                            }
                            else{
                                setStartDate(selectedDates[1])
                                setEndDate(selectedDates[0])
                            }
                        }}
                    />
                </div>
            </CardHeader>
            <CardBody>
                <Chart
                    options={options}
                    series={arrayOfObjects}
                    type='bar'
                    height={300}
                />
            </CardBody>
        </Card>
    )
};

export default DailyReport;