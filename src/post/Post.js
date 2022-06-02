import "./Post.css"
import {Card, CardImg} from "react-bootstrap"

const Post = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/grpc-t.jpg" />
            <Card.Body>
                <Card.Title>Titulo del Post</Card.Title>
                <p>Fecha del Post</p>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Leer más</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Post;