import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);

    console.log('campsites:', campsites);

    return (
        <Row>
            {campsites.map((campsite) => {
                return (
                    <Col md='6' className='mb-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;