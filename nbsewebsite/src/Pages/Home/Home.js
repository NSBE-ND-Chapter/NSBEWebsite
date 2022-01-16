import Navigation from "../../Components/Nav/Nav";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Button } from 'bootstrap';


function Home(){

    return(
        <div className="Header">
            <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
        </div>
    );

}

export default Home;