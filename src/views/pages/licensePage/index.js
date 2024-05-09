// ** React Imports
import { Fragment, useState, memo } from 'react'

// ** Table Columns
import { serverSideColumns } from './licenseModal'
import ModalForm from './licenseModal'
import '@styles/base/pages/page-license.scss'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Input, Label, Row, Col, Modal, ModalHeader} from 'reactstrap'

const LicensePage = () => {

  // data
  const data = [{
    "getDeviceDetailConfig": {
      "serverConfig": {
        "id": "D3F8C400-A98D-11EA-8000-AC1F6BE44A92_PERSON",
        "deviceName": "xeon_person",
        "activated": true,
        "hostCreatedTime": "1672531200",
        "hostCreatedUserName": "nvt",
        "cmcApprovedTime": "1672531200",
        "cmcApprovedUserName": "nvt",
        "cmcValidKey": "21",
        "instanceNum": 1,
        "DurationLicense": {
          "durationEnable": true,
          "durationStart": "1672531200",
          "durationStop": "1704067200",
          "durationCurrent": "1672531200"
        },
        "FaceRecogLicense": {
          "faceRegEnable": false,
          "faceRegMaxUser": 1,
          "faceRegCurrentUserNumber": 1
        },
        "FaceSmartSearchLicense": {
          "faceSmartSearchEnable": false
        },
        "FaceAgeLicense": {
          "faceAgeEnable": false
        },
        "FaceGenderLicense": {
          "faceGenderEnable": false
        },
        "FaceEmotionLicense": {
          "faceEmotionEnable": false
        },
        "PersonActionLicense": {
          "personActionEnable": false
        },
        "PersonSmartSearchLicense": {
          "personSmartSearchEnable": true
        },
        "PersonDescriptionLicense": {
          "personDescriptionEnable": true
        },
        "PersonInstrusionLicense": {
          "personInstrusionEnable": true
        },
        "ekycMaxRequestNumber": 0,
        "ekycCurrentRequestNumber": 0
      },
      "deviceCurrentConfig": {
        "id": "D3F8C400-A98D-11EA-8000-AC1F6BE44A92_PERSON",
        "activated": true,
        "hostCreatedTime": "1672531200",
        "hostCreatedUserName": "nvt",
        "cmcApprovedTime": "1672531200",
        "cmcApprovedUserName": "0",
        "cmcValidKey": null,
        "instanceNum": 1,
        "DurationLicense": {
          "durationEnable": true,
          "durationStart": "1672531200",
          "durationStop": "1704067200",
          "durationCurrent": "0"
        },
        "FaceRecogLicense": {
          "faceRegEnable": false,
          "faceRegMaxUser": 0,
          "faceRegCurrentUserNumber": 0
        },
        "FaceSmartSearchLicense": {
          "faceSmartSearchEnable": false
        },
        "FaceAgeLicense": {
          "faceAgeEnable": false
        },
        "FaceGenderLicense": {
          "faceGenderEnable": false
        },
        "FaceEmotionLicense": {
          "faceEmotionEnable": false
        },
        "PersonActionLicense": {
          "personActionEnable": false
        },
        "PersonSmartSearchLicense": {
          "personSmartSearchEnable": true
        },
        "PersonDescriptionLicense": {
          "personDescriptionEnable": true
        },
        "PersonInstrusionLicense": {
          "personInstrusionEnable": true
        },
        "ekycMaxRequestNumber": 0,
        "ekycCurrentRequestNumber": 0
      },
      "LicenseValidate": {
        "deviceId": "D3F8C400-A98D-11EA-8000-AC1F6BE44A92_PERSON",
        "isValid": false,
        "InvalidKeys": [
          "cmcApprovedUserName",
          "cmcValidKey",
          "faceRegMaxUser"
        ]
      }
    }
  },
  {
    "getDeviceDetailConfig": {
      "serverConfig": {
        "id": "D5FSSF400-A32D-56EA-7302-AC1F6BE64A32_PERSON",
        "deviceName": "theanh_person",
        "activated": true,
        "hostCreatedTime": "1672531200",
        "hostCreatedUserName": "nvt",
        "cmcApprovedTime": "1672531200",
        "cmcApprovedUserName": "nvt",
        "cmcValidKey": "21",
        "instanceNum": 1,
        "DurationLicense": {
          "durationEnable": true,
          "durationStart": "1672531200",
          "durationStop": "1704067200",
          "durationCurrent": "1672531200"
        },
        "FaceRecogLicense": {
          "faceRegEnable": false,
          "faceRegMaxUser": 1,
          "faceRegCurrentUserNumber": 1
        },
        "FaceSmartSearchLicense": {
          "faceSmartSearchEnable": false
        },
        "FaceAgeLicense": {
          "faceAgeEnable": false
        },
        "FaceGenderLicense": {
          "faceGenderEnable": false
        },
        "FaceEmotionLicense": {
          "faceEmotionEnable": false
        },
        "PersonActionLicense": {
          "personActionEnable": false
        },
        "PersonSmartSearchLicense": {
          "personSmartSearchEnable": true
        },
        "PersonDescriptionLicense": {
          "personDescriptionEnable": true
        },
        "PersonInstrusionLicense": {
          "personInstrusionEnable": true
        },
        "ekycMaxRequestNumber": 0,
        "ekycCurrentRequestNumber": 0
      },
      "deviceCurrentConfig": {
        "id": "D5FSSF400-A32D-56EA-7302-AC1F6BE64A32_PERSON",
        "activated": true,
        "hostCreatedTime": "1672531200",
        "hostCreatedUserName": "nvt",
        "cmcApprovedTime": "1672531200",
        "cmcApprovedUserName": "0",
        "cmcValidKey": null,
        "instanceNum": 1,
        "DurationLicense": {
          "durationEnable": true,
          "durationStart": "1672531200",
          "durationStop": "1704067200",
          "durationCurrent": "0"
        },
        "FaceRecogLicense": {
          "faceRegEnable": false,
          "faceRegMaxUser": 0,
          "faceRegCurrentUserNumber": 0
        },
        "FaceSmartSearchLicense": {
          "faceSmartSearchEnable": false
        },
        "FaceAgeLicense": {
          "faceAgeEnable": false
        },
        "FaceGenderLicense": {
          "faceGenderEnable": false
        },
        "FaceEmotionLicense": {
          "faceEmotionEnable": false
        },
        "PersonActionLicense": {
          "personActionEnable": false
        },
        "PersonSmartSearchLicense": {
          "personSmartSearchEnable": true
        },
        "PersonDescriptionLicense": {
          "personDescriptionEnable": true
        },
        "PersonInstrusionLicense": {
          "personInstrusionEnable": true
        },
        "ekycMaxRequestNumber": 0,
        "ekycCurrentRequestNumber": 0
      },
      "LicenseValidate": {
        "deviceId": "D5FSSF400-A32D-56EA-7302-AC1F6BE64A32_PERSON",
        "isValid": false,
        "InvalidKeys": [
          "cmcApprovedUserName",
          "cmcValidKey",
          "faceRegMaxUser"
        ]
      }
    }
  }]
  // ** States
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(7)
  const [searchValue, setSearchValue] = useState('')



  // ** Function to handle filter
  const handleFilter = e => {
    setSearchValue(e.target.value)

  }


  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Math.ceil(data.length / rowsPerPage)

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel='...'
        pageCount={Math.ceil(count) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName='page-item'
        breakClassName='page-item'
        nextLinkClassName='page-link'
        pageLinkClassName='page-link'
        breakLinkClassName='page-link'
        previousLinkClassName='page-link'
        nextClassName='page-item next-item'
        previousClassName='page-item prev-item'
        containerClassName={
          'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        }
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      q: searchValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (data.length > 0) {
      return data
    } else if (data.length === 0 && isFiltered) {
      return []
    } else {
      return data.slice(0, rowsPerPage)
    }
  }

  const [formModal, setFormModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState(data[0]);

  
  const handleRowClick= (row) => {
    setFormModal(!formModal)
    setSelectedRow(row);
  }

  return (
    <Fragment>
      <Card>
        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            <Label className='me-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            pagination
            paginationServer
            expandOnRowClicked
            className='react-dataTable'
            columns={serverSideColumns}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            onRowClicked={handleRowClick}
          />
          <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered modal-xl'>
            <ModalHeader toggle={() => setFormModal(!formModal)}>{selectedRow.getDeviceDetailConfig.serverConfig.deviceName}</ModalHeader>
            <ModalForm data={selectedRow}/>
          </Modal>
        </div>
      </Card>
    </Fragment>
  )
}

export default memo(LicensePage)
