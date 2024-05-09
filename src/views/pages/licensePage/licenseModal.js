// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import {Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Label, Input, Form, Row, Col } from 'reactstrap'
import {ChevronsRight}  from 'react-feather'
import '@styles/base/pages/page-license.scss'

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

const ModalForm = ({ data }) => {
  // ** States
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  function formatDateFromSeconds(seconds) {
    const dateObj = new Date(seconds * 1000); // Chuyển đổi từ milliseconds sang seconds
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần +1
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <Form>
      <Row>
          <Col sm='6'>
            <Accordion className='accordion-without-arrow accordion-margin' open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId='1'>Device Infor</AccordionHeader>
                <AccordionBody accordionId='1'>
                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      ID
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='id' id='id' placeholder='ID' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.id} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='id' id='id' placeholder='ID' value={data.getDeviceDetailConfig.serverConfig.id} onChange={(event) => handleChange(event, data.getDeviceDetailConfig.serverConfig.id)} />
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='name'>
                      Name
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='name' id='name' placeholder='Name' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.deviceName} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='name' id='name' placeholder='Name' value={data.getDeviceDetailConfig.serverConfig.deviceName} />
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='key'>
                      Key
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='key' id='key' placeholder='Key' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.cmcValidKey} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='key' id='key' placeholder='Key' value={data.getDeviceDetailConfig.serverConfig.cmcValidKey} />
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Actived
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-actived' name='actived' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.activated} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='NumberOfInstance'>
                      Number of instance
                    </Label>
                    <Col sm='4'>
                      <Input type='number' name='NumberOfInstance' id='NumberOfInstance' placeholder='Number of instance' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.instanceNum} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='number' name='NumberOfInstance' id='NumberOfInstance' placeholder='Number of instance' value={data.getDeviceDetailConfig.serverConfig.instanceNum} />
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId='2'>
                  License Duration
                </AccordionHeader>
                <AccordionBody accordionId='2'>
                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Enable
                    </Label>
                    <Col sm='4'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-license-duration' name='licenseDuration' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.DurationLicense.durationEnable} />
                      </div>
                    </Col>

                  </Row>
                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Duration Start
                    </Label>
                    <Col sm='4'>
                      <Input type='date' name='durationStart' id='durationStart' placeholder='Duration Start' disabled value={formatDateFromSeconds(data.getDeviceDetailConfig.deviceCurrentConfig.DurationLicense.durationStart)} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='date' name='durationStart' id='durationStart' placeholder='Duration Start' value={formatDateFromSeconds(data.getDeviceDetailConfig.serverConfig.DurationLicense.durationStart)} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Duration Stop
                    </Label>
                    <Col sm='4'>
                      <Input type='date' name='durationStop' id='durationStop' placeholder='Duration Stop' disabled value={formatDateFromSeconds(data.getDeviceDetailConfig.deviceCurrentConfig.DurationLicense.durationStop)} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='date' name='durationStop' id='durationStop' placeholder='Duration Stop' value={formatDateFromSeconds(data.getDeviceDetailConfig.serverConfig.DurationLicense.durationStop)} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Duration Current
                    </Label>
                    <Col sm='4'>
                      <Input type='date' name='durationCurrent' id='durationCurrent' placeholder='Duration Current' disabled value={formatDateFromSeconds(data.getDeviceDetailConfig.deviceCurrentConfig.DurationLicense.durationCurrent)} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='date' name='durationCurrent' id='durationCurrent' placeholder='Duration Current' value={formatDateFromSeconds(data.getDeviceDetailConfig.serverConfig.DurationLicense.durationCurrent)} />
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId='3'>
                  eKyc Info
                </AccordionHeader>
                <AccordionBody accordionId='3'>
                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Ekyc Max Request Number
                    </Label>
                    <Col sm='4'>
                      <Input type='number' name='ekycMaxRequest' id='ekycMaxRequest' placeholder='Ekyc Max Request Number' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.ekycMaxRequestNumber} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='number' name='ekycMaxRequest' id='ekycMaxRequest' placeholder='Ekyc Max Request Number' value={data.getDeviceDetailConfig.serverConfig.ekycMaxRequestNumber} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Ekyc Current Request Number
                    </Label>
                    <Col sm='4'>
                      <Input type='number' name='ekycCurrentRequest' id='ekycCurrentRequest' placeholder='Ekyc Current Request Number' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.ekycCurrentRequestNumber} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='number' name='ekycCurrentRequest' id='ekycCurrentRequest' placeholder='Ekyc Current Request Number' value={data.getDeviceDetailConfig.serverConfig.ekycCurrentRequestNumber} />
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>
            </Accordion>

          </Col>

          <Col sm='6'>

            <Accordion className='accordion-without-arrow accordion-margin' open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId='4'>
                  Host Info
                </AccordionHeader>
                <AccordionBody accordionId='4'>
                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Host Created Time
                    </Label>
                    <Col sm='4'>
                      <Input type='date' name='hostTime' id='hostTime' placeholder='Host Created Time' disabled value={formatDateFromSeconds(data.getDeviceDetailConfig.deviceCurrentConfig.hostCreatedTime)} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='date' name='hostTime' id='hostTime' placeholder='Host Created Time' value={formatDateFromSeconds(data.getDeviceDetailConfig.serverConfig.hostCreatedTime)} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      CMC Aproved Time
                    </Label>
                    <Col sm='4'>
                      <Input type='date' name='CmcAprovedTime' id='CmcAprovedTime' placeholder='CMC Aproved Time' disabled value={formatDateFromSeconds(data.getDeviceDetailConfig.deviceCurrentConfig.cmcApprovedTime)} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='date' name='CmcAprovedTime' id='CmcAprovedTime' placeholder='CMC Aproved Time' value={formatDateFromSeconds(data.getDeviceDetailConfig.serverConfig.cmcApprovedTime)} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Host Username
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='hostUsername' id='hostUsername' placeholder='Host Username' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.cmcApprovedUserName} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='hostUsername' id='hostUsername' placeholder='Host Username' value={data.getDeviceDetailConfig.serverConfig.cmcApprovedUserName} />
                    </Col>
                  </Row>


                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Approved Username
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='approvedUsername' id='approvedUsername' placeholder='Approved Username' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.cmcApprovedUserName} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='approvedUsername' id='approvedUsername' placeholder='Approved Username' value={data.getDeviceDetailConfig.serverConfig.cmcApprovedUserName} />
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId='5'>
                  Person Recognition
                </AccordionHeader>
                <AccordionBody accordionId='5'>
                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Person Smart Search
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch--person-smart-search' name='personSmartSearch' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.PersonSmartSearchLicense.personSmartSearchEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Person Action recognition
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-person-action-recognition' name='personActionRecognition' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.PersonActionLicense.personActionEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Person Description
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-person-description' name='personDescription' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.PersonDescriptionLicense.personDescriptionEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Emotion Instrution
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-emotion-instrution' name='emotionInstrution' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.PersonInstrusionLicense.personInstrusionEnable} />
                      </div>
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader targetId='6'>
                  Face Recognition
                </AccordionHeader>
                <AccordionBody accordionId='6'>
                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Smart Search
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-smart-search' name='smartSearch' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceSmartSearchLicense.faceSmartSearchEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Age recognition
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-age-recognition' name='ageRecognition' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceAgeLicense.faceAgeEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Gender Recognition
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-gender-recognition' name='genderRecognition' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceGenderLicense.faceGenderEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='actived'>
                      Enable Emotion Recognition
                    </Label>
                    <Col sm='9'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-emotion-recognition' name='emotionRecognition' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceEmotionLicense.faceEmotionEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Enable Face Recognition
                    </Label>
                    <Col sm='4'>
                      <div className='form-switch form-check-primary'>
                        <Input type='switch' id='switch-face-recognition' name='faceRecognition' defaultChecked value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceRecogLicense.faceRegEnable} />
                      </div>
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Maximum number of user{`(s)`}
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='maximumNumberOfUser' id='maximumNumberOfUser' placeholder='Maximum number of users' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.FaceRecogLicense.faceRegMaxUser} />
                    </Col>
                    <Col>
                      <div><ChevronsRight /></div>
                    </Col>
                    <Col sm='4'>
                      <Input type='text' name='maximumNumberOfUser' id='maximumNumberOfUser' placeholder='Maximum number of users' value={data.getDeviceDetailConfig.serverConfig.FaceRecogLicense.faceRegMaxUser} />
                    </Col>
                  </Row>

                  <Row className='mb-1'>
                    <Label sm='3' for='id'>
                      Current number of user{`(s)`}
                    </Label>
                    <Col sm='4'>
                      <Input type='text' name='currentNumberOfUser' id='currentNumberOfUser' placeholder='Current Number Of Users' disabled value={data.getDeviceDetailConfig.deviceCurrentConfig.faceRegCurrentUserNumber} />
                    </Col>
                    <Col><ChevronsRight /></Col>
                    <Col sm='4'>
                      <Input type='text' name='currentNumberOfUser' id='currentNumberOfUser' placeholder='Current Number Of Users' value={data.getDeviceDetailConfig.serverConfig.faceRegCurrentUserNumber} />
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>
            </Accordion>

          </Col>
        </Row>

        <Row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                Send Config Request
              </Button>
              <Button color='primary' type='reset'>
                Update
              </Button>
            </Col>
          </Row>
    </Form>
        
  )
}
export default ModalForm
