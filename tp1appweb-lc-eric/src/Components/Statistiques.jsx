import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Statistiques({stat}) {

    const longue = stat.plusLongueNouvelle();
    const courte = stat.plusCourteNouvelle();
    const moyenne = stat.tailleMoyenne().toFixed(1);
    const recente = stat.plusRecenteNouvelle();
    const ancienne = stat.plusAncienneNouvelle()

    //Affichage des nouvelles en fonction des critères correspondant

    return (
        <Box
            sx={{
                width: "100%",
                padding: 2,
                color: "black",
                // background: "linear-gradient(to bottom right, #f0f4ff, #dfe9ff)",
                backgroundColor: 'secondary.main',
                borderRadius: 3,
                boxShadow: 2,
                mt: 2,
                boxSizing: "border-box",
            }}
            className={"makeitglass"}
        >
            <Typography variant="h5" sx={{display: "flex", alignItems: "center", gap: 1, fontWeight: "bold", mb: 2}}>
                <BarChartIcon/>
                Statistiques
            </Typography>

            <Divider sx={{mb: 2}}/>

            <List dense>
                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Nombre total de nouvelles :</strong> {stat.nbNouvelles}
                            </>
                        }
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Taille moyenne :</strong> {moyenne} caractères
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus longue :</strong> {longue.titre} ({longue.resume.length} caractères)
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus courte :</strong> {courte.titre} ({courte.resume.length} caractères)
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus récente :</strong> {recente.titre} ({recente.date})
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus ancienne :</strong> {ancienne.titre} ({ancienne.date})
                            </>
                        }
                    />
                </ListItem>

            </List>
        </Box>
    );
}