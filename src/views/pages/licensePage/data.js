
// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'DEVICES ID',
    minWidth: '400px',
    selector: row => row.getDeviceDetailConfig.serverConfig.id
  },
  {
    sortable: true,
    name: 'DEVICES NAME',
    minWidth: '400px',
    selector: row => row.getDeviceDetailConfig.serverConfig.deviceName
  },
  {
    sortable: true,
    name: 'TYPE',
    minWidth: '400px',
    selector: ""
  }
]


export default ExpandableTable
