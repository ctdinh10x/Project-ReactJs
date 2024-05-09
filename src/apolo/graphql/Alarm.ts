import { gql } from "@apollo/client";

export const ALL_ALARM_CORE_AI = gql `
query totalAllCoreAiAlarm(
    $startDate :Date!,
    $endDate :Date!
    ){
    totalAllCoreAiAlarm(
    startDate :$startDate
    endDate :$endDate
    )
    }
`;

export const CORE_ALARM_DEVICE_CAMERA_ID = gql`
query totalCoreAlarm(
    $startDate :Date!,
    $endDate :Date!
    ){
    totalCoreAlarm(
    startDate :$startDate
    endDate :$endDate
    ){
    cameraId , deviceId , type , count, time
    }
    }
`;

export const TOTAL_CORE_ALARM = gql `
query totalCoreAlarm{
    totalCoreAlarm {
    cameraId , deviceId , type , count
    }
    }
`;

export const ALARM_BY_MONTH = gql `
query getCoreAlarmByMonth(
    $month: Date!,
    
    ) {
    getCoreAlarmByMonth(
    month: $month,
    ) {
    count, type, time
    }
    }
`;

export const ALARM_BY_DAY = gql `
query getCoreAlarmByDay(
    $day: Date!,
    
    ) {
    getCoreAlarmByDay(
    day: $day,
    ) {
    count, type, time
    }
    }
`;

export const ALl_ALARM_DEIVCE = gql `
query getAllDeviceId(
    $startDate: Date!,
    $endDate: Date!
    ) {
    getAllDeviceId(
    startDate: $startDate,
    endDate: $endDate
      
    ) 
    {name, id}
    }
`;

export const ALl_ALARM_CAMERA = gql `
query getAllCameraId(
    $startDate: Date!,
    $endDate: Date!
    ) {
    getAllCameraId(
    startDate: $startDate,
    endDate: $endDate
      
    )
    {name, id} 
    }
`;