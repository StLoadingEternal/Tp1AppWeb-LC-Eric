import {Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';


export default function TexteDialog({ open, onClose, nouvelle }) {
    if (!nouvelle) return null; // Sécurité

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>

            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "bold",
                }}
            >
                {nouvelle.titre}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Box
                    component="img"
                    src={nouvelle.image}
                    alt={nouvelle.titre}
                    sx={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "cover",
                        borderRadius: 1,
                        mb: 3,
                    }}
                />
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", mb: 4 }}>
                    {nouvelle.texte}
                </Typography>

                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Typography variant="caption" color="text.secondary">
                        {nouvelle.date}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
}