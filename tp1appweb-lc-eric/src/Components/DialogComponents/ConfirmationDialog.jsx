import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function ConfirmationDialog ({open, onClose, nouvelle, supprimerNouvelle}) {

    return(
        <>
            <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle>
                    Suppression d'une nouvelle
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Voulez-vous vraiment supprimer la nouvelle :<strong> {nouvelle?.titre}</strong>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="accent">
                        Annuler
                    </Button>
                    <Button onClick={() => supprimerNouvelle(nouvelle.id)} variant="contained" color="primary" autoFocus>
                        Confirmer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}