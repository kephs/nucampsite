import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';

const CampsiteCard = ({ campsite, setCampsiteId }) => {
    const { id, image, name } = campsite;

    return (
        <Card onClick={() => setCampsiteId(id)}>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default CampsiteCard;