import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';

export default () => (
     <div>
       <Card>
        <CardBody>
            <CardHeader>Hello Next.js!</CardHeader>
            <br/>
            <CardText>Bootstrap 4 power!</CardText>
            <Button color="danger">OK</Button>
        </CardBody>
      </Card>
    </div>
 )