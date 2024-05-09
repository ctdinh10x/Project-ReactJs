import { Fragment } from "react";
import { Col, Row } from "reactstrap";
// import DailyReport from "./DailyReport";
// import LastTimekeepingCard from "./LastTimekeepingCard";
import HourlyReport from "./HourlyReport";
import DailyReport from "./DailyReport";
// import UserInOutByPositionGraph from "./UserInOutByPositionGraph";
// import CurrentUserInOutGraph from "./CurrentUserInOutGraph";
// import SystemSumary from "../components/AlarmSumary";

const DashboardReport = () => {

    return (
        <Fragment>
            {/* <SystemSumary /> */}

            {/* <Row className='match-height'>
                <Col md='8'>
                    <UserInOutByPositionGraph />
                </Col>
                <Col md="4" sm='12'>
                    <LastTimekeepingCard />
                </Col>
            </Row> */}

            <Row className='match-height'>
                <Col md='12'>
                    <DailyReport />
                </Col>

                <Col md='12'>
                    <HourlyReport />
                </Col>
            </Row>

            {/* <Row>
                <Col md='12'>
                    <UserInOutByPositionGraph />
                </Col>
            </Row> */}

        </Fragment>
    )
};

export default DashboardReport;