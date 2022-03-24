
import './ResultModal.css';
import {
    Modal,
    Button
} from '@mui/material/';


export default function  ResultModal({open, gross, net, reset}) {
    return (
        <Modal open={open}>
            <div className="modal-content green-theme">
                <span>{`gross: ${gross} sek`}</span>
                <span className="modal-content__title">{`net: ${net} sek`}</span>
                <Button variant="contained" onClick={reset}>Reset</Button>
            </div>
        </Modal>
    );

}