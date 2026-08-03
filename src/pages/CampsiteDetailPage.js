import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(Number(campsiteId));

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />

                <CommentsList campsiteId={Number(campsiteId)} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;