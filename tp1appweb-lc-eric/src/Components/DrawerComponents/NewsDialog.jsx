import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function NewsDialog ({open, children}){

    return(
        <Dialog open={open} aria-labelledby="form-dialog-title" closeAfterTransition={false}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );


}